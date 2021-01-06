Blockly.JavaScript['page_settings'] = function(block) {
  var statements_page_header = Blockly.JavaScript.statementToCode(block, 'page_header');
  var value_color = Blockly.JavaScript.valueToCode(block, 'page_color', Blockly.JavaScript.ORDER_ATOMIC);
  var value_background = Blockly.JavaScript.valueToCode(block, 'page_background', Blockly.JavaScript.ORDER_ATOMIC);
  var value_paragraph = Blockly.JavaScript.valueToCode(block, 'page_paragraph', Blockly.JavaScript.ORDER_ATOMIC);

  var code = 'document.body.style.color = "' + value_color + '";\n';
  code +=    'document.body.style.backgroundColor = "' + value_background + '";\n';
  code +=    'document.getElementById("description").innerHTML = "' + value_paragraph + '";\n';
  code +=    statements_page_header;
  return code;
};

Blockly.JavaScript['page_header'] = function(block) {
  var value_header_text = Blockly.JavaScript.valueToCode(block, 'header_text', Blockly.JavaScript.ORDER_ATOMIC);
  var value_color = Blockly.JavaScript.valueToCode(block, 'page_color', Blockly.JavaScript.ORDER_ATOMIC);

  var code = 'document.getElementById("header").innerHTML = "' + value_header_text + '";\n';
  code +=    'document.getElementById("header").style.color = "' + value_color + '";\n';
  return code;
};

Blockly.JavaScript['color_blue'] = function(block) {
  var colour_blue = block.getFieldValue('blue');

  var code = '#3333FF';

  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['color_red'] = function(block) {
  var colour_red = block.getFieldValue('red');

  var code = '#FF3333';

  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['color_green'] = function(block) {
  var colour_green = block.getFieldValue('green');

  var code = '#33FF33';

  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['color_black'] = function(block) {
  var colour_black = block.getFieldValue('black');

  var code = '#000000';

  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['color_white'] = function(block) {
  var colour_white = block.getFieldValue('white');

  var code = '#FFFFFF';

  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['page_text'] = function(block) {
  var text_text = block.getFieldValue('page_text');

  var code = text_text;

  return [code, Blockly.JavaScript.ORDER_NONE];
};


Blockly.JavaScript['login'] = function(block) {
  var text_kca = block.getFieldValue('KCA');
  var value_who = Blockly.JavaScript.valueToCode(block, 'who', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  //var code = value_who;
  //var inputparms = value_who;
  //var code ="alert('hello');";
	var code ="function myFunction(){   var oShell = new ActiveXObject('Shell.Application');var commandtoRun = 'C:\\\\Users\\\\cal\\\\OneDrive\\\\CODE\\\\AUTOMATION\\\\TestWhiteCalculator\\\\TestWhiteCalculator\\\\TestWhiteCalculator\\\\bin\\\\Debug\\\\TestWhiteCalculator.exe';var commandParms = '1'; oShell.ShellExecute(commandtoRun, commandParms,'',DontShowWindow, WaitUntilFinished);setTimeout(myFunction, 5000)};myFunction();alert('function 1 - sleep');";  
  
  
  return [code, Blockly.JavaScript.ORDER_NONE];
};



Blockly.JavaScript['logins'] = function(block) {
  var value_login1 = Blockly.JavaScript.valueToCode(block, 'Login1', Blockly.JavaScript.ORDER_ATOMIC);
  var value_login2 = Blockly.JavaScript.valueToCode(block, 'Login2', Blockly.JavaScript.ORDER_ATOMIC);
  var value_login3 = Blockly.JavaScript.valueToCode(block, 'Login3', Blockly.JavaScript.ORDER_ATOMIC);
  var value_login4 = Blockly.JavaScript.valueToCode(block, 'Login4', Blockly.JavaScript.ORDER_ATOMIC);
  var text_km2 = block.getFieldValue('KCA');
  var text_km1 = block.getFieldValue('KCA');
  var text_kcb = block.getFieldValue('KCA');
  var text_kca = block.getFieldValue('KCA');
  // TODO: Assemble JavaScript into code variable.
  var code = text_km2 +text_km1+text_kcb+text_kca;
  return 'alert("' + code+ '");';
};








 
Blockly.JavaScript['manage_key'] = function(block) {
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
 // var code = value_name;

 
 var code ="alert('pausing...');var oShell = new ActiveXObject('Shell.Application');var commandtoRun = 'C:\\\\Users\\\\cal\\\\OneDrive\\\\CODE\\\\AUTOMATION\\\\TestWhiteCalculator\\\\TestWhiteCalculator\\\\TestWhiteCalculator\\\\bin\\\\Debug\\\\TestWhiteCalculator.exe';var commandParms = '2'; oShell.ShellExecute(commandtoRun, commandParms);";  
  
 //    return 'alert("' + code+ '");';

     return code;
};
 
 
 
 
 Blockly.JavaScript['LoginKCAX'] = function(block) {
  var text_text = block.getFieldValue('KCA');

  var code = text_text;

  return [code, Blockly.JavaScript.ORDER_NONE];
};


Blockly.JavaScript['block_type'] = function(block) {
  var dropdown_login = block.getFieldValue('login');
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
	var code = value_name;
     return 'alert("' + code+ '");';
};
















Blockly.JavaScript['simplelogin'] = function(block) {
  var value_slot1 = Blockly.JavaScript.valueToCode(block, 'slot1', Blockly.JavaScript.ORDER_ATOMIC);
  var value_slot2 = Blockly.JavaScript.valueToCode(block, 'slot2', Blockly.JavaScript.ORDER_ATOMIC);
  var value_slot3 = Blockly.JavaScript.valueToCode(block, 'slot3', Blockly.JavaScript.ORDER_ATOMIC);
  var value_slot4 = Blockly.JavaScript.valueToCode(block, 'slot4', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  //var code = value_slot1 + ";" + value_slot2 +";" + value_slot3+";" + value_slot4;
 // var code = value_slot1  + value_slot2 + value_slot3+ value_slot4;
 var codeX ="var oShell = new ActiveXObject('Shell.Application');var commandtoRun = 'C:\\\\Users\\\\cal\\\\OneDrive\\\\CODE\\\\AUTOMATION\\\\TestWhiteCalculator\\\\TestWhiteCalculator\\\\TestWhiteCalculator\\\\bin\\\\Debug\\\\TestWhiteCalculator.exe';var commandParms = '1'; oShell.ShellExecute(commandtoRun, commandParms);";  
 var code ="alert('Logging In'); var oShell = new ActiveXObject('Shell.Application');var commandtoRun = 'C:\\\\Users\\\\cal\\\\OneDrive\\\\CODE\\\\AUTOMATION\\\\TestWhiteCalculator\\\\TestWhiteCalculator\\\\TestWhiteCalculator\\\\bin\\\\Debug\\\\TestWhiteCalculator.exe';var commandParms = '1'; oShell.ShellExecute(commandtoRun, commandParms);";  
   //var code = value_slot1  ;
    // return 'alert("' + code+ '");';
     return code;
};
Blockly.JavaScript['simpleloginX'] = function(block) {
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = value_name;
     return 'alert("' + code+ '");';
};

















Blockly.JavaScript['page_text'] = function(block) {
  var text_text = block.getFieldValue('page_text');

  var code = text_text;

  return [code, Blockly.JavaScript.ORDER_NONE];
};


 Blockly.JavaScript['LoginKCA'] = function(block) {
  var text_text = block.getFieldValue('KCA');

  var code = text_text;

  return [code, Blockly.JavaScript.ORDER_NONE];
};


 Blockly.JavaScript['LoginKCB'] = function(block) {
  var text_text = block.getFieldValue('KCB');

  var code = text_text;

  return [code, Blockly.JavaScript.ORDER_NONE];
};


 Blockly.JavaScript['LoginKM1'] = function(block) {
  var text_text = block.getFieldValue('KM1');

  var code = text_text;

  return [code, Blockly.JavaScript.ORDER_NONE];
};


 Blockly.JavaScript['LoginKM2'] = function(block) {
  var text_text = block.getFieldValue('KM2');

  var code = text_text;

  return [code, Blockly.JavaScript.ORDER_NONE];
};
