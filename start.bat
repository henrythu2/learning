@echo off
echo 🚀 启动 Kids Word Learning 应用...
echo.
echo 尝试使用 Python HTTP 服务器...
echo.

python --version >nul 2>&1
if %errorlevel% == 0 (
    echo ✅ 找到 Python，在端口 8000 启动服务器...
    echo.
    echo 📱 请在浏览器中访问: http://localhost:8000
    echo.
    echo 按 Ctrl+C 停止服务器
    python -m http.server 8000
) else (
    python3 --version >nul 2>&1
    if %errorlevel% == 0 (
        echo ✅ 找到 Python3，在端口 8000 启动服务器...
        echo.
        echo 📱 请在浏览器中访问: http://localhost:8000
        echo.
        echo 按 Ctrl+C 停止服务器
        python3 -m http.server 8000
    ) else (
        echo ❌ 未找到 Python，请安装 Python 后重试
        echo 或者直接用浏览器打开 index.html 文件
        echo.
        pause
    )
)