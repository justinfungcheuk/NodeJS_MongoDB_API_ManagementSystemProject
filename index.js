console.log("hello")
function add(x,y){
    console.log(x+y);
}
add(7,8);
/**
 * 準備 Node.js
 * 使用 nvm 來安裝並維護多個 Node.js 的版本
 * 1. 項目地址
 * https://github.com/nvm-sh/nvm
 * 安裝：curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
 * 當你在 cmd 出現該錯誤：zsh: command not found: nvm
 * 需要使用該命令在運行 nvm 命令之前：source ~/.nvm/nvm.sh
 *
 * 2. 配置加速鏡像(為什麼要使用加速鏡像呢？ 因為在國內下載相關的國外的 nvm配置文件會比較慢，所以需要用國內的鏡像來達到加速的效果)
 * export NVM_NODEJS_ORG_MIRROR=https://npm.taobao.org/mirrors/node
 * 
 * nvm ls-remote 來查看現有的 nvm版本有哪些
 * 
 * nvm instal 版本號碼（例如：8.0.0） 可以安裝相應的版本號碼
 * 
 * nvm install --lts 可以安裝最新版本的 nvm
 * 
 * nvm install node  可以安裝 node的最新版本
 * 
 * nvm ls 可以查看已經安裝好的 node版本，而已經安裝好的也就是代表我們可以使用的 node版本 有哪些
 * nvm run v16.14.2 index.js 可以運行我們想用那一個版本的 nvm 來運行代碼
 * 
 * node -v 可以查看現在使用的 node版本 
 *
 * nvm use 16.14.2 可以用來切換使用那一個版本的node
 * 
 * nvm run node --version 可以查到現在運行的最新的 node版本
 * nvm use 則可以直接使用我們想要運行的創建在 .nvmrc該文件裡面所寫的 node版本 例如：16.14.2，讀取該版本號來切換想用的版本
 * 
 * 
 *  
 * 執行 .js文件
 * 1. 編寫 index.js 文件
 * console.log("hello")
   function add(x,y){
    console.log(x+y);
   }
   add(6,7);
   2. node index.js 執行代碼
   3. 安裝 nodemon, 實時偵測文件的變化（也就是可以直接在 cmd裡面達到即時更新顯示有關已經修改的代碼）
   npm -v 可以查看現在使用的 npm版本
   npm install nodemon -g
   -g 的意思是在全局的範圍內安裝，讓我們可以在任何的目錄都可以使用 npm命令
   nodemon 可以直接在文件內修改內容，讓cmd作出即時的修改變化反應

   淘寶 NPM鏡像
   https://npm.taobao.org
   $ npm install -g cnpm --registry=https://registry.npmmirror.com
   安裝國內源的 npm淘寶鏡像


   
 */