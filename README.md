# lovecheck.js
a validators for data
---
## Installation and Usage
installation:
```
npm install lovecheck
```
usage:
```
const oc = require("lovecheck");
```
or
```
import oc from "lovecheck";
```
ps: your operating environment need to supports es6 and commonjs.  
a example:
```
import oc from "lovecheck";
oc.isEmail("1164310634@qq.com"); // true;
```
---
## validator list
| function                       |describe                                                      |
| :-------------:                |:-------------:                                               | 
| isMobile(str)                  | check mobile                                                 |
| isPassword(str, min ,max)      | min is password's minlength <br> max is password's maxlength |
| isName(str, min , max)         | min is name's minlength <br> max is name's maxlength         |
| isPostalcode(str)              | postal must be six nubmers                                   |
| isEmail(str)                   | check Email                                                  |
--- 
continuously updated...
