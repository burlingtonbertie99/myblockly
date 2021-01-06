
Blockly.Blocks['page_settings'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(120);
    this.appendStatementInput("page_header")
        .appendField("Header:");
    this.appendValueInput("page_color")
        .setCheck("color")
        .appendField("Text Color:");
    this.appendValueInput("page_background")
        .setCheck("color")
        .appendField("Background Color:");
    this.appendValueInput("page_paragraph")
        .setCheck("String")
        .appendField("Paragraph:");
    this.setTooltip('');
  }
};

Blockly.Blocks['page_header'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(240);
    this.appendValueInput("header_text")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Header Text:");
    this.appendValueInput("page_color")
        .setCheck("color")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Color:");
    this.setPreviousStatement(true, "page_settings");
    this.setTooltip('');
  }
};



Blockly.Blocks['color_blue'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(60);
    this.appendDummyInput()
        .appendField("Blue:")
        .appendField(new Blockly.FieldColour("#3333ff"), "blue");
    this.setOutput(true, "color");
    this.setTooltip('');
  }
};

Blockly.Blocks['color_red'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(60);
    this.appendDummyInput()
        .appendField("Red:")
        .appendField(new Blockly.FieldColour("#ff3333"), "red");
    this.setOutput(true, "color");
    this.setTooltip('');
  }
};

Blockly.Blocks['color_green'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(60);
    this.appendDummyInput()
        .appendField("Green:")
        .appendField(new Blockly.FieldColour("#33ff33"), "green");
    this.setOutput(true, "color");
    this.setTooltip('');
  }
};

Blockly.Blocks['color_black'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(60);
    this.appendDummyInput()
        .appendField("Black:")
        .appendField(new Blockly.FieldColour("#000000"), "black");
    this.setOutput(true, "color");
    this.setTooltip('');
  }
};

Blockly.Blocks['color_white'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(60);
    this.appendDummyInput()
        .appendField("White:")
        .appendField(new Blockly.FieldColour("#ffffff"), "white");
    this.setOutput(true, "color");
    this.setTooltip('');
  }
};

Blockly.Blocks['login'] = {
  init: function() {
    this.appendValueInput("who")
        .setCheck(null)
     //   .appendField(new Blockly.FieldTextInput("default"), "KCA");
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};


 
Blockly.Blocks['logins'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(160);
    this.appendValueInput("Login1")
        .setCheck("String")
        .appendField(new Blockly.FieldTextInput("l1"), "KCA");
    this.appendValueInput("Login2")
        .setCheck("String")
        .appendField(new Blockly.FieldTextInput("l2"), "KCB");
    this.appendValueInput("Login3")
        .setCheck("String")
        .appendField(new Blockly.FieldTextInput("l3"), "KM1");
    this.appendValueInput("Login4")
        .setCheck("String")
        .appendField(new Blockly.FieldTextInput("l4"), "KM2");
    this.setNextStatement(true, "Boolean");
    this.setTooltip('');
  }
};
 
 
 Blockly.Blocks['manage_key'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(20);
    this.appendValueInput("NAME")
        .setCheck("String")
        .appendField("Manage key name");
    this.setPreviousStatement(true, "Boolean");
    this.setTooltip('');
  }
};
 


Blockly.Blocks['block_type'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck("String")
        .appendField(new Blockly.FieldDropdown([["1", "KCA"], ["2", "KCB"], ["3", "KM1"], ["4", "KM2"], ["5", "SA1"]]), "login");
    this.setInputsInline(true);
    this.setNextStatement(true, "Boolean");
    this.setColour(290);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['simplelogin'] = {
  init: function() {
    this.appendValueInput("slot1")
        .setCheck("String")
        .appendField("id");
    this.appendValueInput("slot2")
        .setCheck("String")
        .appendField("id");
    this.appendValueInput("slot3")
        .setCheck("String")
        .appendField("id");
    this.appendValueInput("slot4")
        .setCheck("String")
        .appendField("id");
    this.setInputsInline(false);
    this.setNextStatement(true, "Boolean");
    this.setColour(290);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['simpleloginX'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck("String")
        .appendField("id");
    this.setInputsInline(true);
    this.setNextStatement(true, "Boolean");
    this.setColour(290);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};




Blockly.Blocks['page_text'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(300);
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput("Text Input"), "page_text");
    this.setOutput(true, "String");
    this.setTooltip('');
  }
};


 
 Blockly.Blocks['LoginKCA'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(300);
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput("KCA"), "KCA");
    this.setOutput(true, "String");
    this.setTooltip('');
  }
};



 
 Blockly.Blocks['LoginKCB'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(300);
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput("KCB"), "KCB");
    this.setOutput(true, "String");
    this.setTooltip('');
  }
};



 
 Blockly.Blocks['LoginKM1'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(300);
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput("KM1"), "KM1");
    this.setOutput(true, "String");
    this.setTooltip('');
  }
};


 
 Blockly.Blocks['LoginKM2'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(300);
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput("KM2"), "KM2");
    this.setOutput(true, "String");
    this.setTooltip('');
  }
};
