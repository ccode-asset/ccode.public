## **How to Resolve MCP Issues with Python SDK using the uv Library?**

> _By Abhi Majumdar, Student at University of Chicago, Laboratory Schools, Class of 2028, Thursday, July 17, 2025_

Running example demonstrations with Model Context Protocol (MCP) can be difficult and cause many errors with the system and internal SDK root directories, especially due to MCP being a very recent development. This blog aims to give instructions to resolve these issues, with the specific example, [simple-tool](https://github.com/modelcontextprotocol/python-sdk/tree/main/examples/servers/simple-tool). 

---

### **Folder Strucure and Setup**

After importing the zip file into an editor, clone the Git repository to any local directory like so:

```
git clone https://github.com/modelcontextprotocol/python-sdk/
```

Then, make sure you have uv, a Python Package Manager, installed. It can be installed in many ways on various setups.

Homebrew:

```
brew install uv
```

Pip:

```
pip install uv
```

PipX:

```
pipx install uv
```

If a virtual environment was not automatically created, create one using the following command:

```
uv venv
```

After creating the virtual environment folder, which is important for managing dependencies, package installs and script executions, the folder structure within the simple-tool directory should look like this:

```
SIMPLE-TOOL/
├── .venv/
├── mcp_simple_tool/
│ ├── pycache/
│ ├── __init__.py
│ ├── __main__.py
│ └── server.py
├── .python-version
├── pyproject.toml
├── README.md
├── uv.lock
```

---

### **TOML File Issues**

Now, it is imperative to take a closer look into the pyproject.toml file to make sure it is configured properly for the project to run smoothly, outlining what uv wants the Python program to have. The purpose of a TOML file is to clearly configure the dependencies, libraries and packages required to run the program. The first part of the TOML file should list basic supporting files and information like the README, minimum Python and MCP versions:

```toml
[project]
name = "mcp-simple-tool"
version = "0.1.0"
description = "A simple MCP server exposing a website fetching tool"
readme = "README.md"
```

Continuing through, the next important part are the libraries needed for server.py to run put in a list under dependencies:

```toml
dependencies = ["anyio>=4.5", "click>=8.1.0", "httpx>=0.27", "mcp"]
```

So far, the TOML file has been straightforward, and is usually configured properly on importing as they have to do with the source code, rather than the individual directory setup. However, the project.scripts section often causes issues. 

```toml
[project.scripts]
mcp-simple-tool = "mcp_simple_tool.server:main"
```

As seen in the code above, the path to run the tool (in the main function defined in server.py), is mapped to mcp-simple-tool as a shortcutted script. Oftentimes this will be mapped to the main.py file, which is an egregious configuration error. It is also important to note, that the script is written with hyphen separated title as opposed to a required underscore title in a Python folder name, entailing that it is mandatory to use the hyphen separated title when running the uv command. 

---

### **Final Run Commands**

Once the TOML file is configured correctly,  the program is usually fixed and can run smoothly with no errors. However, there are a few more common mistakes that cause errors in this SDK example. Firstly, make sure that the Python project is in your main workspace, otherwise you could fall victim to a package environment disruption error. In addition, it is also important to clear the cache before running to remove any corrupt package data. This frees up disc space to resolve recurring catching issues. This can be done by using the following command:

```
uv cache clear
```

Now, the program can be run, and all the errors should be fixed using the command shown below:

```
uv run mcp-simple-tool
```