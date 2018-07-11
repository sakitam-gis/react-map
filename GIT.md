## Git设置
```bash
git config --global core.autocrlf false
git config --global core.safecrlf true
```
## 含义：

### AutoCRLF

```bash
# 提交时转换为LF，检出时转换为CRLF
git config --global core.autocrlf true
```

```bash
# 提交时转换为LF，检出时不转换
git config --global core.autocrlf input
```

```bash
# 提交检出均不转换
git config --global core.autocrlf false
```

### SafeCRLF

```bash
# 拒绝提交包含混合换行符的文件
git config --global core.safecrlf true
```

```bash
# 允许提交包含混合换行符的文件
git config --global core.safecrlf false
```

```bash
#提交包含混合换行符的文件时给出警告
git config --global core.safecrlf warn
```
