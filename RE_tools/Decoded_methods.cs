public void ExecuteControlCommand(string command, params object[] parameterObjects)
{
	int num = 4;
	string text = default(string);
	object[] array = default(object[]);
	int num2 = default(int);
	while (true)
	{
		switch (num)
		{
		default:
			text = string.Empty;
			num = ((parameterObjects == null) ? 1 : 2);
			break;
		case 2:
			array = parameterObjects;
			num2 = 0;
			num = 0;
			break;
		case 3:
		{
			object ⴍ = array[num2];
			text = text + (string.IsNullOrEmpty(text) ? ""  : "Invoking {0}" ) + ႥႥႨႠ.Ⴈ.ႨႷႭ(ⴍ);
			num2++;
			num = 0;
			break;
		}
		case 0:
			num = ((num2 >= array.Length) ? 1 : 3);
			break;
		case 1:
			ExecuteJS(command + "\x1b" + text + ")");
			return;
		}
	}
}

public void ExecuteJS(string script)
{
	int num = 1;
	string text;
	while (true)
	{
		int num2;
		switch (num)
		{
		default:
			num2 = ((!string.IsNullOrEmpty(PageFrameName)) ? 2 : 0);
			goto IL_0022;
		case 2:
			text = PageFrameName + Ⴅ.ႤႥႥ(1514635462);
			break;
		case 0:
			text = string.Empty;
			break;
		}
		break;
		IL_0022:
		num = num2;
	}
	string str = text;
	ExecuteGlobalJS(ႰႤႷ.Ⴍ.ႥႳႳ(1514635481) + str + ႰႤႷ.Ⴍ.ႥႳႳ(1514635486) + script);
}



