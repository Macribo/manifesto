window.requestFileSystem = window.requestFileSystem || window.webkitRequestFileSystem || window.mozRequestFileSystem || window.msRequestFileSystem || false;

window.storageInfo = navigator.persistentStorage || navigator.webkitPersistentStorage || navigator.mozPersistentStorage || navigator.msPersistentStorage || false;

var stType = window.PERSISTENT || 1,
    stSize = (5*1024*1024),
    fileSystem,
    fileListEl = document.getElementyId('files');
    currentFile;

//standard error function for all file system API method calls:
var fsError= function(e){
    if(e.code ===9){
        alert('file name already exists', 'file system Error');
    }else{
    alert('an unexpected error occured. Error Code: '+ e.code);
    }
}
//standard error function for all Quota Management API method calls:
var qmError = function(e){
    if(e.code === 22){
        alert('Quota exceeded','Quota error');
    }
    else{
        alert('An unexpected error occured. Error code:'+e.code);
    }
};

//does the browser support file system API & Quota Management API (aka StorageInfo)?
if(requestFileSystem && storageInfo){
    var checkQuota = function(currentUsage,quota){
        if(quota === 0){
            storageInfo.requestQuota(stType, stSize, getFS, qmError); //because the app has a persistent filesystem; trigger a message asking permission to access user's browser's filesystem
        }else{
        getFS(quota);
        }
    };

    //if queryUsageAndQuota executes, it passes usage and quota info to the callback function 'checkQuota'.  Otherwise qmError(). CheckQuota determines of sufficient quota exists to store files. if not, then it needs to request a larger quota:
storageInfo.queryUsageAndQuota(stType,checkQuota,qmError);

var getFS = function(fs){
    fileSystem=fs;
    updateBrowserFilesList();
    if(view === 'editor'){
        loadFile(fileName);
    }
}
    }else{
        alert('file system API not supported', 'unsupported');
    }
;




////displayBrowserFileList() accepts a list of files as an argument, and updates the UI to display each of these files with view edit delete buttons.
//


var displayBrowserFileList = function(files){
    fileListEl.innerHTML='';
    document.getElementById('file_count').innerHTML = files.length;
    if(files.length >0){
    
        files.forEach(function(file, i){
            var li = '<li id="li_'+i+'"draggable="true">'+file.name
            + '<div><button id="view_'+i+'">View</button>'
            + '<button class="green" id="edit_'+i+">Edit</button>'
            + '<button class="red" id="del_'+i+">Delete</button'
            + '</div></li>';
        fileListEl.insertAdjecentHTML('beforeend',li);

        var listItem = document.getElementById('li '+i),
            viewBtn = document.getElementById('view_'+i),
            editBtn = document.getElementById('edit_'+i),
            deleteBtn = document.getElementById('del_'+i);
        
        var doDrag = function(e){dragFile(file, e);}
        var doView = function(){viewFile(file);}
        var doEdit = function(){editFile(file);}
        var doDelete = function(){deleteFile(file);}
        
        viewBtn.addEventListener('click', doView, false);
        editBtn.addEventListener('click', doEdit, false);
        deleteBtn.addEventListener('click', doDelete, false);
        listItem.addEventListener('dragstart', doDrag, false);
    });
}else{
    fileListEl.innerHTML = '<li class="empty">No Files To Display</li>';
}
};


//To execute displayBrowserFileList(), we need to pass an array of all of the files in the app directory. updateBrowserFileList() does this by using a DirectoryReader object:
//


var updateBrowserFilesList = function(){
    var dirReader = fileSystem.root.createReader(),
        files = [];
    var readFileList = function(){  //recursive function to keep reading until all files have been retrieved.
        dirReader.readEntries(function(fileSet){
            if(!fileSet.length){
                displayBrowserFileList(files.sort()); //when the end of the directory is reached, call the displayBrowserFileList() with the alphabetically sorted files array as an argument
            }else{
                for(var i = 0, len=fileSet.length;i<len;i++){
                    files.push(fileSet[i]);
                }
            readFileList();
            }},fsError);
    };


var loadFile = function(name){

    fileSystem.root.getFile(name, {}, function(fileEntry){
        currentFile = fileEntry();
        fileEntry.file(function(file){
        var reader = new FileReader();
        reader.onloadend= function(e){
        updateVisualEditor(this.result);
        updateHtmlEditor(this.result);
        }
        reader.readAsText(file);
        },fsError); 
    },fsError);

};
      
