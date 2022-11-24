var fso, f1, ts, s;
var ForReading = 1;
fso = new ActiveXObject("Scripting.FileSystemObject");
// 创建文件
{f1 = fso.CreateTextFile("c:\\testfile.txt", true);}
// 填写一行数据
f1.WriteLine("Hello World");
f1.WriteBlankLines(1);
// 关闭文件
f1.Close();
// 打开文件
ts = fso.OpenTextFile("c:\\testfile.txt", ForReading);
// 读取文件一行内容到字符串
s = ts.ReadLine();
// 显示字符串信息
alert("File contents = '" + s + "'");
// 关闭文件
ts.Close();
