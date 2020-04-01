Blockly.Blocks['block_arm_1'] = {
  init: function() {
    this.jsonInit(
      {
        "type": "block_arm_1",
        "message0": "di chuyển servo %1 đến góc %2 *",
        "args0": [
          {
            "type": "field_dropdown",
            "name": "goc_1",
            "options": [
              [
                "đế",
                "pin16"
              ],
              [
                "bên trái",
                "pin14"
              ],
              [
                "bên phải",
                "pin15"
              ],
              [
                "tay gắp",
                "pin10"
              ]
            ]
          },
          {
            "type": "input_value",
            "name": "do_1"
          }
        ],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#4240a9",
        "tooltip": "",
        "helpUrl": ""
      }
    );
  }
};


Blockly.Blocks['block_arm_2'] = {
  init: function() {
    this.jsonInit(
      {
        "type": "block_arm_2",
        "message0": "di chuyển servo %1 đến góc 90*",
        "args0": [
          {
            "type": "field_dropdown",
            "name": "center",
            "options": [
              [
                "đế",
                "pin16"
              ],
              [
                "bên trái",
                "pin14"
              ],
              [
                "bên phải",
                "pin15"
              ],
              [
                "tay gắp",
                "pin10"
              ]
            ]
          }
        ],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#4240a9",
        "tooltip": "",
        "helpUrl": ""
      }
    );
  }
};


Blockly.Blocks['block_arm_3'] = {
  init: function() {
    this.jsonInit(
      {
        "type": "block_arm_3",
        "message0": "đọc tọa độ %1 của joystick %2",
        "args0": [
          {
            "type": "field_dropdown",
            "name": "local",
            "options": [
              [
                "X",
                "1"
              ],
              [
                "Y",
                "10"
              ]
            ]
          },
          {
            "type": "field_dropdown",
            "name": "lr",
            "options": [
              [
                "trái",
                "1"
              ],
              [
                "phải",
                "2"
              ]
            ]
          }
        ],
        "output": "Number",
        "colour": "#4240a9",
        "tooltip": "",
        "helpUrl": ""
      }
    );
  }
};


Blockly.Blocks['block_arm_4'] = {
  init: function() {
    this.jsonInit(
      {
        "type": "block_arm_4",
        "message0": "kẹp lại",
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#4240a9",
        "tooltip": "",
        "helpUrl": ""
      }
    );
  }
};


Blockly.Blocks['block_arm_5'] = {
  init: function() {
    this.jsonInit(
      {
        "type": "block_arm_5",
        "message0": "thả ra",
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#4240a9",
        "tooltip": "",
        "helpUrl": ""
      }
    );
  }
};



Blockly.Python['block_arm_1'] = function(block) {
  Blockly.Python.definitions_['import_yolobit'] = 'from yolobit import *';
  var dropdown_name = block.getFieldValue('goc_1');
  var value_name = Blockly.Python.valueToCode(block, 'do_1', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = dropdown_name+'.servo_write('+value_name+')\n';
  return code;
};
Blockly.Python['block_arm_2'] = function(block) {
  Blockly.Python.definitions_['import_yolobit'] = 'from yolobit import *';
  var dropdown_center = block.getFieldValue('center');
  // TODO: Assemble JavaScript into code variable.
  var code = dropdown_center+'.servo_write(89)\n';
  return code;
};
Blockly.Python['block_type'] = function(block) {
  var dropdown_local = block.getFieldValue('local');
  var dropdown_lr = block.getFieldValue('lr');
  var x = dropdown_local*dropdown_lr;
  // TODO: Assemble Python into code variable.
  var code = '180*pin'+x+'.read_analog()/4096';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['block_arm_4'] = function(block) {
  Blockly.Python.definitions_['import_yolobit'] = 'from yolobit import *';
  // TODO: Assemble Python into code variable.
  var code = 'pin10.servo_write(5)\n';
  return code;
};
Blockly.Python['block_arm_5'] = function(block) {
  Blockly.Python.definitions_['import_yolobit'] = 'from yolobit import *';
  // TODO: Assemble Python into code variable.
  var code = 'pin10.servo_write(160)\n';
  return code;
};