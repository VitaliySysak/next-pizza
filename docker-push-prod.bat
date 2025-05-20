:: Run docker before start

@echo off
start powershell -NoExit -Command "docker push bering152/crustloop-pizza-prod:latest"
