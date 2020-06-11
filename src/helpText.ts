const helpText = {
  body: "Command Reference: \n\
- link <Matrix room ID> <Mumble channel name | \"root_channel\"> [true] \n\
  - Use \"root_channel\" instead of a channel name to link the topmost channel in Mumble \n\
  - Set \"true\" to send join/leave part messages to the linked Matrix room \n\
- unlink matrix <Matrix room ID> \n\
- unlink mumble <Mumble channel name | root_channel> \n\
- help \n\
\n\
More info: https://github.com/mymindstorm/matrix-appservice-mumble/blob/master/README.md#configure",
  formatted_body: "<h1>Command Reference</h1> \
  <ul> \
  <li>link &lt;Matrix room ID&gt; &lt;Mumble channel name | <code>root_channel</code>&gt; [<code>true</code>] \
    <ul> \
      <li>Use <code>root_channel</code> instead of a channel name to link the topmost channel in Mumble</li> \
      <li>Set <code>true</code> to send join/leave part messages to the linked Matrix room</li> \
    </ul> \
  </li> \
  <li>unlink matrix &lt;Matrix room ID&gt;</li> \
  <li>unlink mumble &lt;Mumble channel name | root_channel&gt;</li> \
  <li>help</li> \
  </ul> \
  <a href=\"https://github.com/mymindstorm/matrix-appservice-mumble/blob/master/README.md#configure\">More info</a>"
};

export default helpText;
