# Logger

A simple logging utility for Node.js that logs messages to a specified file and optionally to the console. The logger supports different log levels, including debug, info, warn, and error.

## Features

- Log messages to a file with a timestamp.
- Support for multiple log levels: debug, info, warn, and error.
- Optionally log messages to the console.
- Customizable log message separator.
- Automatically create the log directory if it does not exist.

## Installation

To use the Logger class, you can clone this repository or copy the Logger class file into your project.

```bash
npm install fs path
```

## Usage

Here’s an example of how to use the Logger class:

```js
const Logger = require('./path/to/Logger'); // Adjust the path accordingly

const logger = new Logger('logs/app.log', '|', true); // Log to 'logs/app.log', use '|' as separator, log to console

logger.debug('This is a debug message');
logger.info('This is an info message');
logger.warn('This is a warning message');
logger.error('This is an error message');

```

### Constructor Parameters

The `Logger` class constructor accepts the following parameters:

- **`filePath`** (String): 
  - Description: The path to the log file where messages will be recorded.
  - Example: `'logs/app.log'`.

- **`separator`** (String, optional): 
  - Description: The character used to separate log message components. Defaults to `|`.
  - Example: `'/'`.

- **`logToConsole`** (Boolean, optional): 
  - Description: If `true`, log messages will also be printed to the console. Defaults to `false`.
  - Example: `true`.

### Method Parameters

#### `debug(message)`

- **`message`** (String | Array): 
  - Description: The message or array of messages to log as a debug entry.

#### `info(message)`

- **`message`** (String | Array): 
  - Description: The message or array of messages to log as an info entry.

#### `warn(message)`

- **`message`** (String | Array): 
  - Description: The message or array of messages to log as a warning entry.

#### `error(message)`

- **`message`** (String | Array): 
  - Description: The message or array of messages to log as an error entry.

### Methods

#### `debug(message)`

- **Description**: Logs a debug message to the file (and optionally to the console).
- **Parameters**:
  - **`message`** (String | Array): The message or array of messages to log as a debug entry.
- **Example**:
  ```javascript
  logger.debug('This is a debug message');

#### `info(message)`

- **Description**: Logs an informational message to the file (and optionally to the console).
- **Parameters**:
  - **`message`** (String | Array): The message or array of messages to log as a debug entry.
- **Example**:
  ```javascript
  logger.info('This is a info message');

#### `warn(message)`

- **Description**: Logs a warning message to the file (and optionally to the console).
- **Parameters**:
  - **`message`** (String | Array): The message or array of messages to log as a warnconst path = require('path');
const fs = require('fs');

class Logger {
  constructor(filePath, separator = '|', logToConsole = false) { 
    this.filePath = path.join(filePath);
    this.separator = separator;
    this.logToConsole = logToConsole;  
    
    const dir = path.dirname(this.filePath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
  }

  debug(message) {
    const logMessage = Array.isArray(message) 
      ? message.join(` ${this.separator} `)    
      : message;                       
    
    fs.appendFileSync(
      this.filePath,
      `${new Date().toISOString()} ${this.separator} ${logMessage}\n`,
      'utf8'
    );
    
    if (this.logToConsole) {  // Updated this.Console to this.logToConsole
      console.log(`${new Date().toISOString()} ${this.separator} ${logMessage}\n`);
    }
  }

  info(message) {
    const logMessage = Array.isArray(message) 
      ? message.join(` ${this.separator} `)    
      : message;                       
    
    fs.appendFileSync(
      this.filePath,
      `${new Date().toISOString()} ${this.separator} ${logMessage}\n`,
      'utf8'
    );
    
    if (this.logToConsole) {  // Updated this.Console to this.logToConsole
      console.log(`${new Date().toISOString()} ${this.separator} ${logMessage}\n`);
    }
  }

  warn(message) {
    const logMessage = Array.isArray(message) 
      ? message.join(` ${this.separator} `)    
      : message;                       
    
    fs.appendFileSync(
      this.filePath,
      `${new Date().toISOString()} ${this.separator} ${logMessage}\n`,
      'utf8'
    );
    
    if (this.logToConsole) {  // Updated this.Console to this.logToConsole
      console.log(`${new Date().toISOString()} ${this.separator} ${logMessage}\n`);
    }
  }

  error(message) {
    const logMessage = Array.isArray(message) 
      ? message.join(` ${this.separator} `)    
      : message;                       
    
    fs.appendFileSync(
      this.filePath,
      `${new Date().toISOString()} ${this.separator} ${logMessage}\n`,
      'utf8'
    );
    
    if (this.logToConsole) {  // Updated this.Console to this.logToConsole
      console.log(`${new Date().toISOString()} ${this.separator} ${logMessage}\n`);
    }
  }
}

module.exports = Logger;
ing entry.
- **Example**:
  ```javascript
  logger.warn('This is a warn message');

#### `error(message)`

- **Description**: Logs a error message to the file (and optionally to the console).
- **Parameters**:
  - **`message`** (String | Array): The message or array of messages to log as a error entry.
- **Example**:
  ```javascript
  logger.error('This is a warn message');


### Notes

This section can clarify important behaviors and usage notes for the logger.

```markdown
- The logger will create the specified log directory if it does not already exist.
- Log messages can be passed as a string or an array of strings. If an array is provided, the logger will join the elements using the specified separator.
- The log file will be created if it doesn't exist, and new entries will be appended to the file.
- The log messages include a timestamp in ISO format, making it easy to track when each log entry was created.
```

### License
```
This format makes it clear what parameters the user can expect and how to use them effectively!
```
