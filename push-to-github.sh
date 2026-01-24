#!/bin/bash

echo "========================================="
echo "推送 Veo32 项目到 GitHub"
echo "========================================="
echo ""

# 检查远程仓库配置
echo "1. 检查远程仓库配置..."
git remote -v
echo ""

# 检查当前分支
echo "2. 当前分支："
git branch
echo ""

# 检查是否有未提交的更改
echo "3. 检查工作区状态..."
git status
echo ""

echo "4. 开始推送到 GitHub..."
echo "   如果提示输入用户名，请输入: xuuuuewww"
echo "   如果提示输入密码，请输入你的 GitHub Personal Access Token"
echo "   (不是你的 GitHub 密码)"
echo ""
echo "   如果还没有 Personal Access Token，请访问："
echo "   https://github.com/settings/tokens"
echo "   创建新 token，权限选择 'repo'"
echo ""

# 尝试推送
git push -u origin main

echo ""
echo "========================================="
if [ $? -eq 0 ]; then
    echo "✅ 推送成功！"
    echo "   访问: https://github.com/xuuuuewww/veo32"
else
    echo "❌ 推送失败"
    echo ""
    echo "可能的原因："
    echo "1. GitHub 仓库还未创建，请先访问 https://github.com/new 创建仓库 'veo32'"
    echo "2. 需要认证，请使用 Personal Access Token"
    echo "3. 网络连接问题"
fi
echo "========================================="
