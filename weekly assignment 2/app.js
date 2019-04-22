const fs = require('fs');
const path = require('path');

const bodyParser = require('body-parser');
const basicAuth = require('express-basic-auth');
const handlebars = require('express-handlebars');

const express = require('express');
const app = express();