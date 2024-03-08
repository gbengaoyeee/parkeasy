#!/bin/bash

cd ..

zip -r backend.zip . -x "node_modules/*" -x "dist/*" -x "terraform/*"