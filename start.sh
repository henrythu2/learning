#!/bin/bash

echo "🚀 启动 Kids Word Learning 应用..."
echo ""
echo "尝试使用 Python HTTP 服务器..."

# 检查Python3是否安装
if command -v python3 &> /dev/null; then
    echo "✅ 找到 Python3，在端口 8000 启动服务器..."
    echo ""
    echo "📱 请在浏览器中访问: http://localhost:8000"
    echo ""
    echo "按 Ctrl+C 停止服务器"
    python3 -m http.server 8000
elif command -v python &> /dev/null; then
    echo "✅ 找到 Python，在端口 8000 启动服务器..."
    echo ""
    echo "📱 请在浏览器中访问: http://localhost:8000"
    echo ""
    echo "按 Ctrl+C 停止服务器"
    python -m SimpleHTTPServer 8000
else
    echo "❌ 未找到 Python，请安装 Python 后重试"
    echo "或者直接用浏览器打开 index.html 文件"
fi