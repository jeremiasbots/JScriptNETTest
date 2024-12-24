import System
import System.Windows.Forms
import System.IO
import System.Net
import System.Text

class File {
    public var name: String;
    function readFile() {
        var reader = new StreamReader(this.name)
        var content = reader.ReadToEnd()
        reader.Close()
        return content
    }
}

var file = new File();
file.name = "C:\\Users\\Marcelo\\Projects\\Javascript\\JScriptNetTest\\example.txt"
System.Windows.Forms.MessageBox.Show(file.readFile())