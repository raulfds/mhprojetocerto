import { execSync } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectDir = path.join(__dirname, '..');

try {
  console.log('Verificando status do repositório...');
  execSync('git status', { cwd: projectDir, stdio: 'inherit' });

  console.log('\nAdicionando todas as alterações...');
  execSync('git add -A', { cwd: projectDir, stdio: 'inherit' });

  console.log('\nFazendo commit...');
  execSync('git commit -m "Deploy: Alterações do projeto"', { cwd: projectDir, stdio: 'inherit' });

  console.log('\nFazendo push para main...');
  execSync('git push origin main', { cwd: projectDir, stdio: 'inherit' });

  console.log('\n✓ Push concluído com sucesso!');
} catch (error) {
  console.error('Erro ao fazer commit e push:', error.message);
  process.exit(1);
}
