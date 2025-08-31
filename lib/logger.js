const path = require("path");
const fs = require("fs").promises;

class Logger {
  constructor(filePath, separator = "|", logToConsole = false, logRotation = false) {
    this.filePath = filePath;
    this.separator = separator;
    this.logToConsole = logToConsole;
    this.logRotation = logRotation;

    this.ensureDirectoryExists(path.dirname(this.filePath));
  }

  async ensureDirectoryExists(dirPath) {
    try {
      await fs.mkdir(dirPath, { recursive: true });
    } catch (err) {
      console.error("Error creating directory:", err);
    }
  }

  async logging(level, ...messages) {
    const logMessage = messages.join(` ${this.separator} `);
    const formattedMessage = `${new Date().toLocaleString()} ${this.separator} [${level.toUpperCase()}] ${this.separator} ${logMessage}`;

    try {
      let baseFilePath = this.filePath;
      if (this.logRotation) {
        const date = new Date();
        const dateString = `${date.getFullYear()}-${(date.getMonth() + 1)
          .toString()
          .padStart(2, "0")}-${date.getDate().toString().padStart(2, "0")}`;

        baseFilePath = path.join(this.filePath, `${dateString}.log`);
        await this.ensureDirectoryExists(path.dirname(baseFilePath));
      }

      await fs.appendFile(baseFilePath, `${formattedMessage}\n`, "utf8");
    } catch (err) {
      console.error("Error writing to log file:", err);
    }

    if (this.logToConsole) {
      console.log(formattedMessage);
    }
  }

  log(...messages) {
    return this.logging("log", ...messages);
  }

  debug(...messages) {
    return this.logging("debug", ...messages);
  }

  info(...messages) {
    return this.logging("info", ...messages);
  }

  warn(...messages) {
    return this.logging("warn", ...messages);
  }

  error(...messages) {
    return this.logging("error", ...messages);
  }
}

module.exports = Logger;

