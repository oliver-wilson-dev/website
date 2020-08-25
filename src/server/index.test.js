const express = require('express');
const path = require('path');

const mockUse = jest.fn();
const mockGet = jest.fn();
const mockListen = jest.fn();
const mockSendFile = jest.fn();

jest.mock('express', () => () => ({
  use: mockUse,
  get: mockGet,
  listen: mockListen
}));


jest.mock('path', () => ({
  join: jest.fn()
}));


describe('server', () => {
  beforeAll(() => {
    path.join.mockImplementation((_, path) => path);
    express.static = jest.fn(path => path);
    mockGet.mockImplementation((path, func) => {
      func(undefined, { sendFile: mockSendFile });
    });
    require('./index');
  });

  describe('app.use', () => {
    it('should call app.use with the path to the dist folder', () => {
      expect(mockUse).toHaveBeenCalledWith('../../dist');
    });

    it('should call express.static with the path to the dist folder', () => {
      expect(express.static).toHaveBeenCalledWith('../../dist');
    });
  });

  describe('app.get', () => {
    it('should call app.get with the correct path and a function', () => {
      expect(mockGet).toHaveBeenCalledWith('*', expect.any(Function));
    });

    describe('when calling app.get', () => {
      it('should send the correct file(s)', () => {
        expect(mockSendFile).toHaveBeenCalledWith('../../dist/index.html');
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
          mockGet.mockImplementation((path, func) => {
            func(undefined, { sendFile: mockSendFile });
          });

          process.env.PORT = mockPort;
          require('./index');
        });


        it('should call app.listen with the port provided by the environment variable', () => {
          expect(mockListen).toHaveBeenCalledWith(mockPort);
        });
      });
    });
  });
});
