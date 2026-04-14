#!/bin/bash

# Fazer commit e push para main
cd /vercel/share/v0-project

echo "Verificando status do repositório..."
git status

echo ""
echo "Adicionando todas as alterações..."
git add -A

echo ""
echo "Fazendo commit..."
git commit -m "Deploy: Alterações do projeto"

echo ""
echo "Fazendo push para main..."
git push origin main

echo ""
echo "✓ Push concluído com sucesso!"
