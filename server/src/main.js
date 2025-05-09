//const express = require('express');
import express from "express";
export const app=express();
import { pizza_routers } from "./routers/pizza_routers.js";

app.use('/',pizza_routers); 
