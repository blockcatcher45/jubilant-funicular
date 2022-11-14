 class StrictEqualityExtension {
  getInfo() {
    return {
      id: 'strictequalityexample', // change this if you make an actual extension!
      name: 'LESSSSSSSS GOOOOOOOO BEST EXTENSION EVERR YURRRRRRRRRRR',
      blocks: [
        {
          opcode: 'strictlyEquals',
          blockType: Scratch.BlockType.COMMMAND,
          text: '[ONE] strictly equals [TWO]',
          arguments: {
            ONE: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'First value'
            },
            TWO: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'Second value'
            }
          }
        }
      ]
    };
  }
  strictlyEquals(args) {
    // Note strict equality: Inputs must match exactly: in type, case, etc.
    return args.ONE === args.TWO;
  }
}
Scratch.extensions.register(new StrictEqualityExtension());