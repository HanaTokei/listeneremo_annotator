mis_top450 标注网页（静态站点）

你要解决的问题
- 一会看视频，一会切 Excel 太累。
- 这个页面把“视频播放 + 标注表单 + 上一个/下一个切换”集成到一个网页里。
- 不上传视频：视频仍在你本地磁盘。

支持的输入
- 一个本地文件夹，里面是视频文件：
  001_xxx.mp4
  002_xxx.mp4
  ...

建议你直接选择：
  E:\mer2026_parts\mis_top450

------------------------------------------------------------
用法 A（推荐）：本地启动（最稳）

1) 打开 PowerShell，进入本目录：
   cd D:\vscode_project\MER2026\mis_top450_annotator_web

2) 启动一个本地静态服务器：
   python -m http.server 8000

3) 用 Chrome/Edge 打开：
   http://localhost:8000

4) 点击“选择视频文件夹”，选 E:\mer2026_parts\mis_top450

------------------------------------------------------------
用法 B：GitHub Pages（代码上网，视频不上传）

说明
- GitHub Pages 只能托管代码（html/js/css）。
- 视频不能上传到 GitHub（数据集协议也不允许）。
- 你打开网页后，依然可以在浏览器里“选择本地视频文件夹”进行标注（Chrome/Edge 支持）。

步骤（你自己建一个新 repo）
1) 把本目录的文件放到 GitHub 仓库里（比如放在 /docs 目录）
2) GitHub 仓库设置 Settings → Pages：
   - Build and deployment: Deploy from a branch
   - Branch: main
   - Folder: /docs（如果你放的是 docs）
3) 打开你的 Pages 链接（https://xxx.github.io/yyy/）
4) 点击“选择视频文件夹”选择本地的 E:\mer2026_parts\mis_top450

------------------------------------------------------------
标注字段（极简版）

- s2_visible
  1 = 能看到听者/反应（哪怕短）
  0 = 看不到/不可判/只有 speaker/混乱/心声/片尾曲

- s2_label 仅在 s2_visible=1 时填写
  1 neutral, 2 angry, 3 happy, 4 sad, 5 worried, 6 surprise

- s2_confidence 仅在 s2_visible=1 时填写
  3 很确定 / 2 一般 / 1 不确定

能看到反应但判不出来
- s2_visible=1
- s2_label 留空
- s2_confidence 留空

------------------------------------------------------------
导入/导出

- 自动保存：你每次改动都会写入浏览器 localStorage
- 导出：导出CSV（按 name 对齐）
- 导入：可以导入你之前导出的 CSV（或把 Excel 另存为 CSV）

