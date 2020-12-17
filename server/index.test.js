import path from 'path';
import express from 'express';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import clientConfig from '../build/client.config';

const mockUse = jest.fn();
const mockGet = jest.fn();
const mockListen = jest.fn();

jest.mock('express', () => () => ({
  use: mockUse,
  get: mockGet,
  listen: mockListen
}));

jest.mock('path', () => ({
  join: jest.fn(),
  resolve: jest.fn()
}));

jest.mock('./handleRender', () => ({
  __esModule: true,
  default: 'handle-render'
}));
jest.mock('cookie-parser');
jest.mock('compression');
jest.mock('webpack-dev-middleware');
jest.mock('webpack');
jest.mock('../build/client.config.js', () => jest.fn());

describe('server', () => {
  const mockCompressionMiddleware = Symbol('test-compression-middleware');
  const mockCookieParserMiddleware = Symbol('test-cookie-parser-middleware');
  const consoleLog = console.log;
  const mockClientConfig = {
    output: {
      publicPath: Symbol('test-client-public-path')
    }
  };

  beforeAll(() => {
    clientConfig.mockReturnValue(mockClientConfig);
    cookieParser.mockReturnValue(mockCookieParserMiddleware);
    compression.mockReturnValue(mockCompressionMiddleware);
    path.join.mockImplementation((_, path) => path);
    path.resolve.mockImplementation((_, path) => path);
    express.static = jest.fn(path => path);
    console.log = jest.fn();
    require('./index');
  });

  afterAll(() => {
    console.log = consoleLog;
  });

  describe('when in production mode', () => {
    describe('app.use', () => {
      beforeEach(() => {
        jest.resetModules();
        jest.clearAllMocks();

        const express = require('express');
        const path = require('path');
        const compression = require('compression');
        const cookieParser = require('cookie-parser');

        clientConfig.mockReturnValue(mockClientConfig);
        cookieParser.mockReturnValue(mockCookieParserMiddleware);
        compression.mockReturnValue(mockCompressionMiddleware);
        path.join.mockImplementation((_, path) => path);
        path.resolve.mockImplementation((_, path) => path);
        express.static = jest.fn(path => path);
        console.log = jest.fn();

        process.env.NODE_ENV = 'production';
      });

      it('should call app.use with the compression middleware', () => {
        require('./index');
        expect(mockUse).toHaveBeenCalledWith(mockCompressionMiddleware);
      });

      it('should call app.use with the path to the dist folder', () => {
        require('./index');
        expect(mockUse).toHaveBeenCalledWith('../dist',);
      });

      it('should call app.use with the cookieParser middleware', () => {
        require('./index');
        expect(mockUse).toHaveBeenCalledWith(mockCookieParserMiddleware);
      });
    });
  });

  describe('app.get', () => {
    it('should call app.get with the correct path and a function', () => {
      expect(mockGet).toHaveBeenCalledWith('*', 'handle-render');
    });
  });

  describe('app.listen', () => {
    describe('when there is no env variable set', () => {
      it('should call app.listen with the port 5000', () => {
        expect(mockListen).toHaveBeenCalledWith(5000);
      });
    });

    describe('when an environment variable has been set', () => {
      const mockPort = '9999';
      beforeAll(() => {
        jest.resetModules();
        jest.clearAllMocks();

        const express = require('express');
        const path = require('path');

        path.join.mockImplementation((_, path) => path);
        express.static = jest.fn(path => path);

        process.env.PORT = mockPort;
        require('./index');
      });


      it('should call app.listen with the port provided by the environment variable', () => {
        expect(mockListen).toHaveBeenCalledWith(mockPort);
      });
    });
  });
});
