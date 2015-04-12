
function Update () {

	if(Input.GetKeyDown(KeyCode.RightArrow))
    {
        GetComponent(BoardPosition).movlado +=1;
    }
    if(Input.GetKeyDown(KeyCode.LeftArrow))
    {
        GetComponent(BoardPosition).movlado -=1;
    }
    if(Input.GetKeyDown(KeyCode.UpArrow))
    {
        GetComponent(BoardPosition).movarriba +=1;
    }
    if(Input.GetKeyDown(KeyCode.DownArrow))
    {
        GetComponent(BoardPosition).movarriba -=1;
    }
    }