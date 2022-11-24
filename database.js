var fso = new ActiveXObject("Scripting.FileSystemObject")

// 创建文件
function create_file(name){
  fso.CreateTextFile(name, true)
}

// 填写一行数据
function write_file(name,msg){
  var f=fso.OpenTextFile(name,1,true)
  f.Write(msg)
  f.Close()
}
f1.WriteBlankLines(1)
// 关闭文件
f1.Close()
// 打开文件
ts = fso.OpenTextFile("c:\\testfile.txt", ForReading)
// 读取文件一行内容到字符串
s = ts.ReadLine()
// 显示字符串信息
alert("File contents = '" + s + "'")
// 关闭文件
ts.Close()
