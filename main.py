import os
import json

# 获取当前目录下的所有.md文件名
md_files = [f for f in os.listdir('.') if os.path.isfile(f) and f.endswith('.md')]

# 去掉文件后缀
file_names = [os.path.splitext(f)[0] for f in md_files]

# 创建JSON结构
json_structure = []
for name in file_names:
    json_structure.append({
        "type": "file",
        "name": name,
        "label": name
    })

# 将JSON结构写入文件
with open('_meta.json', 'w', encoding='utf-8') as json_file:
    json.dump(json_structure, json_file, ensure_ascii=False, indent=2)

print("Markdown文件列表已成功写入到files.json中")