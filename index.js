const path = require('path');
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