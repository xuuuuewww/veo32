#!/bin/bash

echo "========================================="
echo "使用正确的账户推送代码到 GitHub"
echo "========================================="
echo ""

echo "当前远程仓库："
git remote -v
echo ""

echo "请按照以下步骤操作："
echo ""
echo "1. 运行推送命令："
echo "   git push -u origin main"
echo ""
echo "2. 当提示输入用户名时，输入: xuuuuewww"
echo ""
echo "3. 当提示输入密码时，输入你的 Personal Access Token"
echo "   （不是 GitHub 密码！）"
echo ""
echo "4. 如果还没有 Personal Access Token，请访问："
echo "   https://github.com/settings/tokens"
echo "   创建新 token，权限选择 'repo'"
echo ""
echo "========================================="
echo ""

# 使用 URL 中包含用户名的方式，强制使用新账户
git push -u origin main
