// Warning: Some assembly references could not be resolved automatically. This might lead to incorrect decompilation of some parts,
// for ex. property getter/setter access. To get optimal decompilation results, please manually add the missing references to the list of loaded assemblies.

// /home/kensalt/practice/discord/terminator/Chatman/Rondyo.Chatman.GUI.Infrastructure.dll
// Rondyo.Chatman.GUI.Infrastructure, Version=1.0.0.0, Culture=neutral, PublicKeyToken=c5cbd59d58549e5d
// Global type: <Module>
// Architecture: x86
// Runtime: v2.0.50727
// This assembly is signed with a strong name key.
// Hash algorithm: SHA1
// Public key: 0024000004800000940000000602000000240000525341310004000001000100191d59fa159c23ec130eff416767aae23b0533b32ead9676e97436dde82b04dd0aae2f743f0b259ead5186c4f921b0230d12318b1fdb6feb32914e1e733a4a9d1693e0473756c24584e144719025749e0f1333e24fa4d6a34a8e3a811b2cb7ea0cb4698f36cfe0c396ed89b6870fa9c1dd357cf01295ab5914e28faf5c2936d8

using Rondyo.Chatman.Data;
using Rondyo.Chatman.GUI.DataTransferObjects;
using Rondyo.Chatman.GUI.Infrastructure.JSHandler;
using Rondyo.Chatman.GUI.Infrastructure.Properties;
using Rondyo.Chatman.GUI.Infrastructure.WebKit;
using Rondyo.Chatman.GUI.Tray.Configuration;
using Rondyo.Chatman.GUI.Tray.MenuItems;
using Rondyo.Chatman.Interfaces.Public;
using System;
using System.CodeDom.Compiler;
using System.Collections.Generic;
using System.ComponentModel;
using System.Diagnostics;
using System.Drawing;
using System.Globalization;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Resources;
using System.Runtime.CompilerServices;
using System.Runtime.InteropServices;
using System.Text;
using System.Threading;
using System.Windows.Forms;
using System.Xml.Serialization;
using ႥႤႷ;
using ႥႥႤ;
using ႥႥႥ;
using ႥႥႨ;
using ႥႥႨႠ;
using ႥႥႨႣ;
using ႥႥႨႥ;
using ႥႥႨႨ;
using ႥႥႨႭ;
using ႥႥႨႼ;
using ႥႥႳႰ;
using ႥႥႼ;
using ႭႨႰ;
using ႭႭႰ;
using ႰႤႷ;
using ႰႭႭ;
using ႷႭႥ;
using ႷႭႨ;
using ႷႭႭ;
using ႷႭႳ;

[assembly: AssemblyCompany("Rondyo")]
[assembly: RuntimeCompatibility(WrapNonExceptionThrows = true)]
[assembly: AssemblyTitle("Chatman")]
[assembly: Debuggable(DebuggableAttribute.DebuggingModes.IgnoreSymbolStoreSequencePoints | DebuggableAttribute.DebuggingModes.EnableEditAndContinue | DebuggableAttribute.DebuggingModes.DisableOptimizations)]
[assembly: CompilationRelaxations(8)]
[assembly: AssemblyDescription("")]
[assembly: AssemblyConfiguration("")]
[assembly: AssemblyFileVersion("1.0.0.0")]
[assembly: AssemblyTrademark("")]
[assembly: ComVisible(false)]
[assembly: Guid("12d569d3-b6a7-4819-8d64-2acad200b166")]
[assembly: AssemblyCopyright("© 2008-2011 Rondyo Ltd. All Rights Reserved")]
[assembly: AssemblyProduct("Chatman")]
[assembly: AssemblyVersion("1.0.0.0")]
namespace Rondyo.Chatman.GUI.Infrastructure
{
	public enum ActionLookupMode
	{
		DefaultPersonality,
		ActivePersonality,
		Both
	}
	public delegate void ControlCommandDelegate(string id, string name, string argument);
}
namespace Rondyo.Chatman.GUI.Infrastructure.Controllers
{
	public class ControllerBase : IController
	{
		protected IPageController HostPageController;

		private string Ⴐ;

		private CommandInvoker Ⴐ;

		private IWebKitWindow Ⴐ;

		protected IWebKitWindow WebKit
		{
			get
			{
				return Ⴐ;
			}
			private set
			{
				Ⴐ = value;
			}
		}

		public string Id => (string)(object)this.Ⴐ;

		public CommandInvoker Invoker
		{
			get
			{
				switch (0)
				{
				default:
					return (CommandInvoker)(this.Ⴐ ?? (this.Ⴐ = (IWebKitWindow)new CommandInvoker(Id)));
				}
			}
		}

		public virtual void Initialize(IWebKitWindow webkit, string id, IPageController hostPageController)
		{
			WebKit = webkit;
			this.Ⴐ = (IWebKitWindow)(object)id;
			HostPageController = hostPageController;
			hostPageController.AddControler(this);
		}

		public virtual void DeInitialize()
		{
			Invoker.Clear();
		}

		protected virtual ႷႭႥ.Ⴅ GetData()
		{
			return null;
		}

		public virtual void GUIInitialize()
		{
			try
			{
				Bind(GetData());
			}
			catch (Exception ⴍ)
			{
				ႥႥႨ.Ⴗ.ႨႷႼ(ⴍ);
			}
		}

		public void ExecuteControlCommand(string command, params object[] parameterObjects)
		{
			//Discarded unreachable code: IL_0005, IL_0023, IL_0034, IL_0042, IL_0050, IL_0075
			string text = string.Empty;
			do
			{
				int num = 0;
				while (num < parameterObjects.Length)
				{
					object ⴍ = parameterObjects[num];
					text = text + (string.IsNullOrEmpty(text) ? ႰႭႭ.Ⴅ.ႤႥႥ(1514635498) : ႰႤႷ.Ⴍ.ႥႳႳ(1514635462)) + ႥႥႨႠ.Ⴈ.ႨႷႭ(ⴍ);
					num++;
					if (891 <= 891 - 872)
					{
						return;
					}
				}
			}
			while (114 < 114 - 62);
			ExecuteJS(ႰႤႷ.Ⴍ.ႥႳႳ(1514635463) + Id + ႰႭႭ.Ⴅ.ႤႥႥ(1514635462) + command + ႰႭႭ.Ⴅ.ႤႥႥ(1514635463) + text + ႰႭႭ.Ⴅ.ႤႥႥ(1514635460));
		}

		public void Bind(ႷႭႥ.Ⴅ data)
		{
			ExecuteControlCommand(ႰႤႷ.Ⴍ.ႥႳႳ(1514635460), data);
		}

		public void ExecuteJS(string script)
		{
			HostPageController.ExecuteJS(script);
		}

		public void ExecuteGlobalJS(string script)
		{
			WebKit.ExecuteJS(script);
		}

		public void RegisterCommand(string commandName, CommandDelegate handler)
		{
			Invoker.RegisterCommand(commandName, handler);
		}
	}
	public abstract class PageControllerBase : IController, IPageController
	{
		private sealed class <>c__DisplayClass4
		{
			public PageControllerBase <>4__this;

			public IWebKitWindow webkit;

			public string id;

			public unsafe void <Initialize>b__3(string s)
			{
				try
				{
					if (Ⴈ != null)
					{
						Ⴈ(id, webkit);
					}
					if (*(OnPageFullyLoadedDelegate*)(&<>4__this.Ⴐ) != null)
					{
						(*(OnPageFullyLoadedDelegate*)(&<>4__this.Ⴐ))(id, webkit);
					}
				}
				catch (Exception ⴍ)
				{
					ႥႥႨ.Ⴗ.ႨႷႭ(ⴍ);
				}
			}
		}

		private IWebKitWindow Ⴐ;

		private CommandInvoker Ⴐ;

		private OnPageFullyLoadedDelegate Ⴐ;

		private static OnPageFullyLoadedDelegate Ⴈ;

		private readonly Dictionary<string, IController> Ⴐ;

		private ႥႥႨႥ.Ⴗ Ⴐ;

		protected bool WindowWasDragged;

		protected bool DeInitialized;

		protected bool DeInitializing;

		private bool Ⴐ;

		private OnPageLoadedData Ⴄ;

		private static readonly string[] Ⴃ = new string[4]
		{
			ႰႤႷ.Ⴍ.ႥႳႳ(1514635426),
			ႰႤႷ.Ⴍ.ႥႳႳ(1514635427),
			ႰႤႷ.Ⴍ.ႥႳႳ(1514635424),
			ႰႤႷ.Ⴍ.ႥႳႳ(1514635425)
		};

		private static ႥႥႤ.Ⴀ Ⴓ;

		private static ႥႥႤ.Ⴈ Ⴗ;

		protected unsafe IWebKitWindow WebKit => *(IWebKitWindow*)(&this.Ⴐ);

		public unsafe CommandInvoker Invoker
		{
			get
			{
				switch (0)
				{
				default:
					return (*(CommandInvoker*)(&this.Ⴐ)) ?? (*(CommandInvoker*)(&this.Ⴐ) = new CommandInvoker(Id));
				}
			}
		}

		public abstract string Id
		{
			get;
		}

		public string PageFrameName => Ⴄ.WindowName;

		public string PageParameters
		{
			get
			{
				switch (0)
				{
				default:
					return Ⴄ.WindowParams ?? string.Empty;
				}
			}
		}

		protected bool IsGuiInitialized => Ⴐ;

		public unsafe event OnPageFullyLoadedDelegate OnPageFullyLoaded
		{
			[MethodImpl(MethodImplOptions.Synchronized)]
			add
			{
				*(OnPageFullyLoadedDelegate*)(&this.Ⴐ) = (OnPageFullyLoadedDelegate)Delegate.Combine(*(OnPageFullyLoadedDelegate*)(&this.Ⴐ), value);
			}
			[MethodImpl(MethodImplOptions.Synchronized)]
			remove
			{
				*(OnPageFullyLoadedDelegate*)(&this.Ⴐ) = (OnPageFullyLoadedDelegate)Delegate.Remove(*(OnPageFullyLoadedDelegate*)(&this.Ⴐ), value);
			}
		}

		public static event OnPageFullyLoadedDelegate OnAnyPageFullyLoaded
		{
			[MethodImpl(MethodImplOptions.Synchronized)]
			add
			{
				Ⴈ = (OnPageFullyLoadedDelegate)Delegate.Combine(Ⴈ, value);
			}
			[MethodImpl(MethodImplOptions.Synchronized)]
			remove
			{
				Ⴈ = (OnPageFullyLoadedDelegate)Delegate.Remove(Ⴈ, value);
			}
		}

		protected unsafe PageControllerBase()
		{
			//Discarded unreachable code: IL_0005, IL_0031, IL_004a, IL_006d, IL_00aa
			*(Dictionary<string, IController>*)(&this.Ⴐ) = new Dictionary<string, IController>();
			while (true)
			{
				Ⴄ = new OnPageLoadedData();
				base..ctor();
				while (true)
				{
					if (Ⴓ != null)
					{
						return;
					}
					if (618 <= 618 - 203)
					{
					}
					if (Ⴗ == null)
					{
						if (766 <= 766 - 145)
						{
							break;
						}
						Ⴗ = delegate
						{
							ႭႨႰ.Ⴐ.Ⴐ.Ⴃ.Ⴗ.ႥႥ(ႰႤႷ.Ⴍ.ႥႳႳ(1514635485));
						};
						if (808 < 808 - 460)
						{
						}
					}
					Ⴓ = ႥႥႤ.Ⴀ.ႳႥ(Ⴗ, ႭႭႰ.Ⴈ.Ⴓ);
					if (840 >= 840 - 404)
					{
						return;
					}
				}
			}
		}

		public unsafe virtual void Initialize(IWebKitWindow webkit, string id, IPageController hostPageController)
		{
			<>c__DisplayClass4 CS$<>8__locals0 = new <>c__DisplayClass4();
			CS$<>8__locals0.webkit = webkit;
			CS$<>8__locals0.id = id;
			CS$<>8__locals0.<>4__this = this;
			DeInitialized = false;
			*(IWebKitWindow*)(&this.Ⴐ) = CS$<>8__locals0.webkit;
			((IWebKitWindow*)(&this.Ⴐ))->OnControlCommand += Ⴍ;
			RegisterCommand(Id, ႰႭႭ.Ⴅ.ႤႥႥ(1514635474), delegate
			{
				PageHidding();
			});
			RegisterCommand(Id, ႰႭႭ.Ⴅ.ႤႥႥ(1514635475), ႳႣႣ);
			RegisterCommand(Id, ႰႭႭ.Ⴅ.ႤႥႥ(1514635472), ႳႣႭ);
			RegisterCommand(Id, ႰႭႭ.Ⴅ.ႤႥႥ(1514635473), delegate
			{
				try
				{
					if (Ⴈ != null)
					{
						Ⴈ(CS$<>8__locals0.id, CS$<>8__locals0.webkit);
					}
					if (*(OnPageFullyLoadedDelegate*)(&CS$<>8__locals0.<>4__this.Ⴐ) != null)
					{
						(*(OnPageFullyLoadedDelegate*)(&CS$<>8__locals0.<>4__this.Ⴐ))(CS$<>8__locals0.id, CS$<>8__locals0.webkit);
					}
				}
				catch (Exception ⴍ)
				{
					ႥႥႨ.Ⴗ.ႨႷႭ(ⴍ);
				}
			});
			RegisterCommand(ႰႭႭ.Ⴅ.ႤႥႥ(1514635478), ႳႣႳ);
			Ⴓ.ႳႣႣ();
		}

		private void ႳႣႣ(string Ⴓ)
		{
			try
			{
				DeInitialize();
			}
			catch (Exception ⴍ)
			{
				ႥႥႨ.Ⴗ.ႨႷႭ(ⴍ);
			}
			Ⴐ = false;
		}

		private unsafe void ႳႣႳ(string Ⴓ)
		{
			ႥႥႨ.Ⴗ.ႳႥ(ႰႤႷ.Ⴍ.ႥႳႳ(1514635473), ((IWebKitWindow*)(&this.Ⴐ))->GetWindowPos(), ႥႥႼ.Ⴅ.ႰႼ());
			*(ႥႥႨႥ.Ⴗ*)(&this.Ⴐ) = ႥႥႼ.Ⴅ.ႰႼ() - ((IWebKitWindow*)(&this.Ⴐ))->GetWindowPos();
			WindowWasDragged = false;
			ႥႥႼ.Ⴅ.Ⴐ = (ႥႥႤ.Ⴜ)Delegate.Combine(ႥႥႼ.Ⴅ.Ⴐ, new ႥႥႤ.Ⴜ(OnDraggingEvent));
			ႥႥႼ.Ⴅ.ႤႠႤ();
		}

		protected unsafe virtual void OnDraggingEvent(ႥႥႨႥ.Ⴗ mouseCoordinates, ႥႥႼ.Ⴈ mouseAction)
		{
			int num = 7;
			while (true)
			{
				int num2;
				switch (num)
				{
				case 5:
					return;
				default:
					ႥႥႨ.Ⴗ.ႳႥ(ႰႭႭ.Ⴅ.ႤႥႥ(1514635479), mouseCoordinates, *(ႥႥႨႥ.Ⴗ*)(&this.Ⴐ), mouseAction);
					num = ((mouseAction != ႥႥႼ.Ⴈ.Ⴓ) ? 1 : 6);
					break;
				case 6:
					WindowWasDragged = true;
					WebKit.SetWindowPos(mouseCoordinates - *(ႥႥႨႥ.Ⴗ*)(&this.Ⴐ));
					num = 1;
					break;
				case 1:
					num = ((mouseAction == ႥႥႼ.Ⴈ.Ⴈ) ? 2 : 4);
					break;
				case 4:
					num = ((mouseAction == ႥႥႼ.Ⴈ.Ⴀ) ? 2 : 3);
					break;
				case 3:
					num2 = (ႥႥႼ.Ⴅ.ႤႠႰ().Has(ႥႥႨႥ.Ⴄ.Ⴈ) ? 1 : 0);
					goto IL_00cb;
				case 2:
					num2 = 0;
					goto IL_00cb;
				case 0:
					{
						ႥႥႼ.Ⴅ.Ⴐ = (ႥႥႤ.Ⴜ)Delegate.Remove(ႥႥႼ.Ⴅ.Ⴐ, new ႥႥႤ.Ⴜ(OnDraggingEvent));
						ႥႥႼ.Ⴅ.ႤႠႠ();
						num = 5;
						break;
					}
					IL_00cb:
					num = ((num2 != 0) ? 5 : 0);
					break;
				}
			}
		}

		protected virtual void PageHidding()
		{
		}

		public unsafe virtual void DeInitialize()
		{
			try
			{
				if (!DeInitialized && !DeInitializing)
				{
					ႥႥႨ.Ⴗ.ႨႷႣ(ႰႤႷ.Ⴍ.ႥႳႳ(1514635478) + Id);
					DeInitializing = true;
					WebKit.OnControlCommand -= Ⴍ;
					ႥႥႨႣ.Ⴀ.ႨႠႠ(delegate
					{
						foreach (KeyValuePair<string, IController> item in *(Dictionary<string, IController>*)(&this.Ⴐ))
						{
							item.Value.DeInitialize();
						}
						ႥႥႨ.Ⴗ.ႨႷႣ(ႰႭႭ.Ⴅ.ႤႥႥ(1514635487) + Id);
						((Dictionary<string, IController>*)(&this.Ⴐ))->Clear();
						((CommandInvoker*)(&this.Ⴐ))->Clear();
					});
					DeInitialized = true;
					if (((IWebKitWindow*)(&this.Ⴐ))->CurrentWebKitState != WebKitState.PreparingToShutDown && ((IWebKitWindow*)(&this.Ⴐ))->CurrentWebKitState != WebKitState.ShuttingDown && !ႥႥႨႣ.Ⴀ.Ⴐ)
					{
						ႥႥႨ.Ⴗ.ႨႷႣ(ႰႤႷ.Ⴍ.ႥႳႳ(1514635479) + Id);
						Initialize(*(IWebKitWindow*)(&this.Ⴐ), null, null);
					}
				}
			}
			catch (Exception ⴍ)
			{
				ႥႥႨ.Ⴗ.ႨႷႼ(ⴍ);
			}
			finally
			{
				DeInitializing = false;
			}
		}

		private void ႳႣႭ(string Ⴃ)
		{
			ႥႥႨ.Ⴗ.ႨႷႣ(ႰႭႭ.Ⴅ.ႤႥႥ(1514635476));
			try
			{
				Ⴄ = (ႥႥႨႠ.Ⴈ.ႨႷႤ<OnPageLoadedData>(Ⴃ) ?? new OnPageLoadedData());
			}
			catch (Exception ⴓ)
			{
				ႥႥႨ.Ⴗ.ႳႤ(ႰႭႭ.Ⴅ.ႤႥႥ(1514635477) + Ⴃ, ⴓ);
				return;
			}
			ႥႥႨ.Ⴗ.ႳႥ(ႰႤႷ.Ⴍ.ႥႳႳ(1514635476), Ⴃ);
			try
			{
				GUIInitialize();
			}
			catch (Exception ⴓ)
			{
				ႥႥႨ.Ⴗ.ႨႷႭ(ⴓ);
			}
			Ⴐ = true;
			ႥႥႨ.Ⴗ.ႨႷႣ(ႰႤႷ.Ⴍ.ႥႳႳ(1514635477));
		}

		private void Ⴍ(string Ⴃ, string Ⴀ, string Ⴄ)
		{
			//Discarded unreachable code: IL_0002, IL_0024, IL_0046
			IController controller = GetController(Ⴃ);
			if (controller != null)
			{
				if (957 > 957 - 390)
				{
					ProcessControlCommand(controller, Ⴀ, Ⴄ);
				}
				ႳႣႥ(Ⴀ);
				while (628 < 628 - 327)
				{
				}
			}
		}

		private void ႳႣႥ(string Ⴃ)
		{
			int num = 2;
			while (true)
			{
				switch (num)
				{
				case 0:
					return;
				default:
					num = ((!Enumerable.Any(PageControllerBase.Ⴃ, Ⴃ.Equals)) ? 1 : 3);
					break;
				case 3:
					num = 0;
					break;
				case 1:
					ႭႨႰ.Ⴐ.Ⴐ.Ⴃ.Ⴗ.ႥႥ(ႰႭႭ.Ⴅ.ႤႥႥ(1514635482));
					Ⴓ.ႳႣႣ();
					num = 0;
					break;
				}
			}
		}

		protected virtual void ProcessControlCommand(IController controller, string name, string argument)
		{
			controller.Invoker.Invoke(name, argument);
		}

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
					text = text + (string.IsNullOrEmpty(text) ? ႰႤႷ.Ⴍ.ႥႳႳ(1514635482) : ႰႭႭ.Ⴅ.ႤႥႥ(1514635483)) + ႥႥႨႠ.Ⴈ.ႨႷႭ(ⴍ);
					num2++;
					num = 0;
					break;
				}
				case 0:
					num = ((num2 >= array.Length) ? 1 : 3);
					break;
				case 1:
					ExecuteJS(command + ႰႤႷ.Ⴍ.ႥႳႳ(1514635483) + text + ႰႤႷ.Ⴍ.ႥႳႳ(1514635480));
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
					text = PageFrameName + ႰႭႭ.Ⴅ.ႤႥႥ(1514635462);
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

		public unsafe void ExecuteGlobalJS(string script)
		{
			ႥႥႨ.Ⴗ.ႳႥ(ႰႭႭ.Ⴅ.ႤႥႥ(1514635480), script);
			((IWebKitWindow*)(&this.Ⴐ))->ExecuteJS(script);
		}

		protected virtual void RegisterPageCommands()
		{
		}

		public unsafe virtual void GUIInitialize()
		{
			RegisterPageCommands();
			foreach (KeyValuePair<string, IController> item in *(Dictionary<string, IController>*)(&this.Ⴐ))
			{
				item.Value.GUIInitialize();
			}
		}

		public unsafe void AddControler(IController controller)
		{
			//Discarded unreachable code: IL_0002, IL_001e, IL_0059, IL_007f
			if (controller.Id == null)
			{
				if (979 > 979 - 126)
				{
					throw new ArgumentException(ႰႤႷ.Ⴍ.ႥႳႳ(1514635487), ႰႭႭ.Ⴅ.ႤႥႥ(1514635481));
				}
			}
			string str;
			while (true)
			{
				if (!string.IsNullOrEmpty(Id))
				{
					if ((649 + 649 * 649) % 2 == 0)
					{
						str = Id + ႰႭႭ.Ⴅ.ႤႥႥ(1514635462);
						break;
					}
					continue;
				}
				str = string.Empty;
				break;
			}
			string key = str + controller.Id;
			((Dictionary<string, IController>*)(&this.Ⴐ))->Add(key, controller);
		}

		public unsafe IController GetController(string id)
		{
			//Discarded unreachable code: IL_0005, IL_000e, IL_0018, IL_002e, IL_0045, IL_005f, IL_0072, IL_0083, IL_0088, IL_009b, IL_00bb, IL_00d2
			int num;
			if (string.Equals(id, Id))
			{
				num = 0;
				goto IL_001a;
			}
			if (50 > 50 - 35)
			{
				goto IL_0030;
			}
			goto IL_0047;
			IL_0013:
			IController result = default(IController);
			return result;
			IL_0047:
			int num2;
			if (!string.IsNullOrEmpty(id))
			{
				if (543 <= 543 - 333)
				{
					goto IL_0013;
				}
				num2 = ((!((Dictionary<string, IController>*)(&this.Ⴐ))->ContainsKey(id)) ? 1 : 0);
			}
			else
			{
				num2 = 1;
			}
			if (num2 == 0)
			{
				if (371 < 371 - 63)
				{
					goto IL_0030;
				}
				result = (*(Dictionary<string, IController>*)(&this.Ⴐ))[id];
			}
			else
			{
				result = null;
				if (759 < 759 - 319)
				{
				}
			}
			goto IL_0013;
			IL_001a:
			if (num == 0)
			{
				if (729 <= 729 - 452)
				{
				}
				result = this;
				goto IL_0013;
			}
			goto IL_0047;
			IL_0030:
			num = ((!string.Equals(id, ႰႤႷ.Ⴍ.ႥႳႳ(1514635484))) ? 1 : 0);
			goto IL_001a;
		}

		public void RegisterCommand(string commandName, CommandDelegate handler)
		{
			Invoker.RegisterCommand(commandName, handler);
		}

		public void RegisterCommand(string controllerID, string commandName, CommandDelegate handler)
		{
			int num = 2;
			IController controller = default(IController);
			while (true)
			{
				switch (num)
				{
				case 1:
					return;
				default:
					controller = GetController(controllerID);
					num = ((controller == null) ? 1 : 0);
					break;
				case 0:
					controller.RegisterCommand(commandName, handler);
					num = 1;
					break;
				}
			}
		}

		public void InvokeCommand(string name, string argument)
		{
			Invoker.Invoke(name, argument);
		}

		public void InvokeCommand(string controllerID, string commandName, string argument)
		{
			int num = 0;
			IController controller = default(IController);
			while (true)
			{
				switch (num)
				{
				case 1:
					return;
				default:
					ႥႥႨ.Ⴗ.ႳႥ(ႰႭႭ.Ⴅ.ႤႥႥ(1514635486), controllerID);
					controller = GetController(controllerID);
					num = ((controller == null) ? 1 : 2);
					break;
				case 2:
					controller.Invoker.Invoke(commandName, argument);
					num = 1;
					break;
				}
			}
		}

		private static void <.ctor>b__0()
		{
			ႭႨႰ.Ⴐ.Ⴐ.Ⴃ.Ⴗ.ႥႥ(ႰႤႷ.Ⴍ.ႥႳႳ(1514635485));
		}

		private void <Initialize>b__2(string argument)
		{
			PageHidding();
		}

		private unsafe void <DeInitialize>b__6()
		{
			foreach (KeyValuePair<string, IController> item in *(Dictionary<string, IController>*)(&this.Ⴐ))
			{
				item.Value.DeInitialize();
			}
			ႥႥႨ.Ⴗ.ႨႷႣ(ႰႭႭ.Ⴅ.ႤႥႥ(1514635487) + Id);
			((Dictionary<string, IController>*)(&this.Ⴐ))->Clear();
			((CommandInvoker*)(&this.Ⴐ))->Clear();
		}
	}
}
namespace Rondyo.Chatman.GUI.Infrastructure
{
	internal sealed class HideableForm : Form
	{
		private bool Ⴈ = false;

		public HideableForm(bool Ⴃ)
		{
			Ⴈ = Ⴃ;
			base.ShowInTaskbar = Ⴈ;
		}

		public void ႷႭႭ(bool Ⴃ)
		{
			//Discarded unreachable code: IL_0002, IL_0025, IL_0053
			Ⴈ = Ⴃ;
			int num;
			do
			{
				num = ႥႥႨႭ.Ⴀ.ႳႼ(base.Handle, -20);
				if (!Ⴈ)
				{
					num &= -262145;
					continue;
				}
				if (14 > 14 - 12)
				{
					num |= 0x40000;
				}
				break;
			}
			while (false);
			ႥႥႨႭ.Ⴀ.Ⴍ(base.Handle, -20, num);
		}

		protected override CreateParams get_CreateParams()
		{
			switch (0)
			{
			default:
			{
				CreateParams createParams = base.CreateParams;
				createParams.ExStyle = (Ⴈ ? (createParams.ExStyle | 0x40000) : (createParams.ExStyle & -262145));
				return createParams;
			}
			}
		}
	}
	public interface IController
	{
		string Id
		{
			get;
		}

		CommandInvoker Invoker
		{
			get;
		}

		void Initialize(IWebKitWindow webkit, string id, IPageController hostPageController);

		void DeInitialize();

		void GUIInitialize();

		void ExecuteJS(string script);

		void ExecuteGlobalJS(string script);

		void RegisterCommand(string commandName, CommandDelegate handler);
	}
	public interface IPageController : IController
	{
		event OnPageFullyLoadedDelegate OnPageFullyLoaded;

		void AddControler(IController controller);

		IController GetController(string id);

		void InvokeCommand(string commandName, string arg);

		new void RegisterCommand(string commandName, CommandDelegate handler);

		void RegisterCommand(string controllerID, string commandName, CommandDelegate handler);

		void InvokeCommand(string controllerID, string commandName, string arg);
	}
	public interface IWebKitWindow
	{
		WebKitState CurrentWebKitState
		{
			get;
			set;
		}

		IntPtr WindowHandle
		{
			get;
		}

		event EventHandler OnShowing;

		event EventHandler OnHiding;

		event EventHandler OnClosing;

		event EventHandler OnClosed;

		event EventHandler OnPageLoaded;

		event PageCommandDelegate OnPageCommand;

		event ControlCommandDelegate OnControlCommand;

		void ConstructWindow(ႷႭႥ.Ⴀ webKitWindowParameters);

		void CloseWindow();

		void ShowWindow(int opacity);

		void BringToTop();

		void Minimize();

		void Resize(int x, int y, int with, int height);

		void SetWindowPos(ႥႥႨႥ.Ⴗ newPosition);

		ႥႥႨႥ.Ⴗ GetWindowPos();

		void NavigateTo(string target);

		void ExecuteJS(string script);

		void PrepareToShutDown();

		void ShutDown();

		void HideWindow();
	}
	public interface IWebKitWindowController
	{
		IWebKitWindow WebKit
		{
			get;
		}

		IPageController TopPageController
		{
			get;
		}

		event EventHandler OnClosed;

		void CreateAndInitialize(ႷႭႥ.Ⴀ webKitWindowParameters);

		void Close();
	}
}
namespace Rondyo.Chatman.GUI.Infrastructure.JSHandler
{
	public class CommandInvoker
	{
		private readonly Dictionary<string, CommandDelegate> Ⴐ;

		private string Ⴐ = (string)(object)new Dictionary<string, CommandDelegate>();

		public CommandInvoker(string ownerId)
		{
			//Discarded unreachable code: IL_0002, IL_001c, IL_0026
			Ⴐ = (ownerId ?? string.Empty);
		}

		public void RegisterCommand(string name, CommandDelegate cmd)
		{
			try
			{
				ႥႥႨ.Ⴗ.ႳႥ(ႰႭႭ.Ⴅ.ႤႥႥ(1514635497), name, Ⴐ);
				((Dictionary<string, CommandDelegate>)(object)this.Ⴐ).Add(name, cmd);
			}
			catch (Exception ⴍ)
			{
				ႥႥႨ.Ⴗ.ႨႷႤ(ႰႤႷ.Ⴍ.ႥႳႳ(1514635499));
				ႥႥႨ.Ⴗ.ႨႷႼ(ⴍ);
			}
		}

		public void Clear()
		{
			((Dictionary<string, CommandDelegate>)(object)this.Ⴐ).Clear();
		}

		public void Invoke(string name, string argument)
		{
			int num = 1;
			while (true)
			{
				switch (num)
				{
				case 0:
					return;
				default:
					ႥႥႨ.Ⴗ.ႳႥ(ႰႤႷ.Ⴍ.ႥႳႳ(1514635496), Ⴐ, name, argument);
					num = (((Dictionary<string, CommandDelegate>)(object)this.Ⴐ).ContainsKey(name) ? 2 : 0);
					break;
				case 2:
					((Dictionary<string, CommandDelegate>)(object)this.Ⴐ)[name](argument);
					num = 0;
					break;
				}
			}
		}
	}
}
namespace Rondyo.Chatman.GUI.Infrastructure
{
	public delegate void OnPageFullyLoadedDelegate(string pageName, IWebKitWindow webKitWindow);
	public delegate void PageCommandDelegate(string name, string argument);
}
namespace Rondyo.Chatman.GUI.Infrastructure.Properties
{
	[DebuggerNonUserCode]
	[CompilerGenerated]
	[GeneratedCode("System.Resources.Tools.StronglyTypedResourceBuilder", "2.0.0.0")]
	public class Resources
	{
		private static ResourceManager Ⴐ;

		private static CultureInfo Ⴐ;

		[EditorBrowsable(EditorBrowsableState.Advanced)]
		public static ResourceManager ResourceManager
		{
			get
			{
				//Discarded unreachable code: IL_0002, IL_0034, IL_0058
				while (object.ReferenceEquals(Resources.Ⴐ, null))
				{
					if (1015 >= 1015 - 335)
					{
						do
						{
							ResourceManager resourceManager = (ResourceManager)(object)(Resources.Ⴐ = (CultureInfo)(object)new ResourceManager("Rondyo.Chatman.GUI.Infrastructure.Properties.Resources", typeof(Resources).Assembly));
						}
						while (816 <= 816 - 365);
						break;
					}
				}
				return (ResourceManager)(object)Resources.Ⴐ;
			}
		}

		[EditorBrowsable(EditorBrowsableState.Advanced)]
		public static CultureInfo Culture
		{
			get
			{
				return Ⴐ;
			}
			set
			{
				Ⴐ = value;
			}
		}

		public static string ChatmanNotConnectedMessage => ResourceManager.GetString(ႰႭႭ.Ⴅ.ႤႥႥ(1514635515), Ⴐ);

		public static string ChatmanNotConnectedMessageTitle => ResourceManager.GetString(ႰႤႷ.Ⴍ.ႥႳႳ(1514635512), Ⴐ);

		public static string ChatmanResetFailed => ResourceManager.GetString(ႰႭႭ.Ⴅ.ႤႥႥ(1514635512), Ⴐ);

		public static string ChatmanResetFailedMessageTitle => ResourceManager.GetString(ႰႤႷ.Ⴍ.ႥႳႳ(1514635513), Ⴐ);

		public static string ChatmanWillNotBeRun => ResourceManager.GetString(ႰႭႭ.Ⴅ.ႤႥႥ(1514635513), Ⴐ);

		public static string ControlPanelMenuItemText => ResourceManager.GetString(ႰႤႷ.Ⴍ.ႥႳႳ(1514635518), Ⴐ);

		public static string DontRunOnStartup => ResourceManager.GetString(ႰႭႭ.Ⴅ.ႤႥႥ(1514635518), Ⴐ);

		public static string ExitMenuItemText => ResourceManager.GetString(ႰႤႷ.Ⴍ.ႥႳႳ(1514635519), Ⴐ);

		public static string FirstTimeStartup => ResourceManager.GetString(ႰႭႭ.Ⴅ.ႤႥႥ(1514635519), Ⴐ);

		public static string MuteMenuItemText => ResourceManager.GetString(ႰႤႷ.Ⴍ.ႥႳႳ(1514635516), Ⴐ);

		public static string ResetAllData => ResourceManager.GetString(ႰႭႭ.Ⴅ.ႤႥႥ(1514635516), Ⴐ);

		public static string ResetPersonalities => ResourceManager.GetString(ႰႤႷ.Ⴍ.ႥႳႳ(1514635517), Ⴐ);

		public static string RunOnStartup => ResourceManager.GetString(ႰႭႭ.Ⴅ.ႤႥႥ(1514635517), Ⴐ);

		public static string StartingUp => ResourceManager.GetString(ႰႤႷ.Ⴍ.ႥႳႳ(1514635458), Ⴐ);

		public static string ToggleMute => ResourceManager.GetString(ႰႭႭ.Ⴅ.ႤႥႥ(1514635458), Ⴐ);

		public static string TrayIconToolTipConnected => ResourceManager.GetString(ႰႤႷ.Ⴍ.ႥႳႳ(1514635459), Ⴐ);

		public static string TrayIconToolTipNotConnected => ResourceManager.GetString(ႰႭႭ.Ⴅ.ႤႥႥ(1514635459), Ⴐ);

		public static string TrayIconToolTipUnknown => ResourceManager.GetString(ႰႤႷ.Ⴍ.ႥႳႳ(1514635456), Ⴐ);

		public static string UnMuteMenuItemText => ResourceManager.GetString(ႰႭႭ.Ⴅ.ႤႥႥ(1514635456), Ⴐ);

		internal Resources()
		{
		}
	}
}
namespace Rondyo.Chatman.GUI.Infrastructure
{
	public enum SpecialActionActivationType
	{
		Everytime,
		EverytimeMinInterval,
		Inactivity,
		EveryFewTimes,
		FirstTimeAndEveryFewTimes,
		InactivityDeminishing,
		InactivityOneTime
	}
	[Serializable]
	[XmlRoot("SA")]
	public class SpecialActions : IDisposable
	{
		[NonSerialized]
		private static SpecialActions theInstance;

		[NonSerialized]
		private static ႥႥႤ.Ⴀ stateSaveTimer;

		public SpecialActionSubmitter Talk2Me_Hello_Full = new SpecialActionSubmitter
		{
			ActivationType = SpecialActionActivationType.EverytimeMinInterval,
			SpecialActionCodes = new int[18]
			{
				207100,
				55000,
				207101,
				10002,
				207104,
				10003,
				207106,
				10004,
				207107,
				10005,
				207109,
				10006,
				207105,
				10007,
				207108,
				10008,
				207110,
				207111
			},
			LookupMode = ActionLookupMode.Both
		};

		public SpecialActionSubmitter Talk2Me_NothingGoingOn = new SpecialActionSubmitter
		{
			ActivationType = SpecialActionActivationType.InactivityOneTime,
			SpecialActionCodes = new int[7]
			{
				10009,
				10010,
				10011,
				10012,
				10015,
				100151,
				10086
			}
		};

		public SpecialActionSubmitter ByeBye = new SpecialActionSubmitter
		{
			ActivationType = SpecialActionActivationType.Everytime,
			SpecialActionCodes = new int[7]
			{
				266020,
				266022,
				266023,
				266024,
				266025,
				266026,
				266027
			},
			LookupMode = ActionLookupMode.ActivePersonality
		};

		public SpecialActionSubmitter Chatmates_Enter = new SpecialActionSubmitter
		{
			SpecialActionCodes = new int[3]
			{
				10060,
				10061,
				10062
			},
			ActivationType = SpecialActionActivationType.FirstTimeAndEveryFewTimes,
			ActivationParameter = 3
		};

		public SpecialActionSubmitter Chatmates_NothingGoingOn = new SpecialActionSubmitter
		{
			ActivationType = SpecialActionActivationType.InactivityOneTime,
			SpecialActionCodes = new int[2]
			{
				10064,
				10086
			}
		};

		public SpecialActionSubmitter Personality_Action_Share = new SpecialActionSubmitter
		{
			SpecialActionCodes = new int[4]
			{
				10066,
				10067,
				10088,
				10089
			}
		};

		public SpecialActionSubmitter Personality_Action_Web_Action_OK = new SpecialActionSubmitter
		{
			SpecialActionCodes = new int[2]
			{
				10112,
				10119
			}
		};

		public SpecialActionSubmitter Personality_Delete_Selected = new SpecialActionSubmitter
		{
			SpecialActionCodes = new int[4]
			{
				10090,
				10091,
				10092,
				10069
			}
		};

		public SpecialActionSubmitter Personality_Delete_Done = new SpecialActionSubmitter
		{
			SpecialActionCodes = new int[4]
			{
				10070,
				100701,
				100702,
				10071
			}
		};

		public SpecialActionSubmitter Personality_Action_DesignNew = new SpecialActionSubmitter
		{
			SpecialActionCodes = new int[3]
			{
				10082,
				10085,
				10106
			}
		};

		public SpecialActionSubmitter Action_Delete_Selected = new SpecialActionSubmitter
		{
			SpecialActionCodes = new int[3]
			{
				10090,
				10091,
				10092
			}
		};

		public SpecialActionSubmitter Action_Delete_Done = new SpecialActionSubmitter
		{
			SpecialActionCodes = new int[3]
			{
				10070,
				100701,
				100702
			}
		};

		public SpecialActionSubmitter Action_Clone = new SpecialActionSubmitter
		{
			SpecialActionCodes = new int[2]
			{
				10072,
				100721
			}
		};

		public SpecialActionSubmitter ActionInfo_Enter = new SpecialActionSubmitter
		{
			SpecialActionCodes = new int[6]
			{
				10108,
				10114,
				10115,
				10116,
				10117,
				10155
			}
		};

		public SpecialActionSubmitter ActionInfo_Save = new SpecialActionSubmitter
		{
			SpecialActionCodes = new int[2]
			{
				10112,
				10119
			}
		};

		public SpecialActionSubmitter Talk2Friends_Enter = new SpecialActionSubmitter
		{
			SpecialActionCodes = new int[3]
			{
				55100,
				10122,
				10123
			},
			ActivationType = SpecialActionActivationType.FirstTimeAndEveryFewTimes,
			ActivationParameter = 2
		};

		public SpecialActionSubmitter Talk2Friends_IMIconClicked = new SpecialActionSubmitter
		{
			SpecialActionCodes = new int[4]
			{
				10124,
				100132,
				10126,
				10127
			}
		};

		public SpecialActionSubmitter Mood_Enter = new SpecialActionSubmitter
		{
			SpecialActionCodes = new int[3]
			{
				10129,
				10130,
				10131
			},
			ActivationType = SpecialActionActivationType.FirstTimeAndEveryFewTimes,
			ActivationParameter = 2
		};

		public SpecialActionSubmitter Mood_Saved = new SpecialActionSubmitter
		{
			SpecialActionCodes = new int[2]
			{
				10112,
				10119
			}
		};

		public SpecialActionSubmitter Apps_Enter = new SpecialActionSubmitter
		{
			SpecialActionCodes = new int[2]
			{
				10134,
				10136
			},
			ActivationType = SpecialActionActivationType.FirstTimeAndEveryFewTimes,
			ActivationParameter = 2
		};

		public SpecialActionSubmitter RemindMe_Enter = new SpecialActionSubmitter
		{
			SpecialActionCodes = new int[5]
			{
				10137,
				10138,
				10140,
				10141,
				10143
			}
		};

		public SpecialActionSubmitter Reminder_Enter = new SpecialActionSubmitter
		{
			SpecialActionCodes = new int[2]
			{
				10142,
				10145
			},
			ActivationType = SpecialActionActivationType.FirstTimeAndEveryFewTimes,
			ActivationParameter = 2
		};

		public SpecialActionSubmitter Reminder_Step2 = new SpecialActionSubmitter
		{
			SpecialActionCode = 10146,
			ActivationType = SpecialActionActivationType.FirstTimeAndEveryFewTimes,
			ActivationParameter = 2
		};

		public SpecialActionSubmitter Reminder_Save = new SpecialActionSubmitter
		{
			SpecialActionCode = 10144
		};

		public SpecialActionSubmitter PushButton_Enter = new SpecialActionSubmitter
		{
			SpecialActionCodes = new int[2]
			{
				10147,
				10148
			}
		};

		public SpecialActionSubmitter PushButton_Save = new SpecialActionSubmitter
		{
			SpecialActionCodes = new int[2]
			{
				10149,
				10150
			}
		};

		public SpecialActionSubmitter MoodWords_Enter = new SpecialActionSubmitter
		{
			SpecialActionCode = 10108,
			ActivationType = SpecialActionActivationType.FirstTimeAndEveryFewTimes,
			ActivationParameter = 3
		};

		public SpecialActionSubmitter UserProfile_Enter = new SpecialActionSubmitter
		{
			SpecialActionCodes = new int[3]
			{
				55200,
				55300,
				55400
			}
		};

		public SpecialActionSubmitter ConflictingMoods = new SpecialActionSubmitter
		{
			SpecialActionCodes = new int[4]
			{
				30800,
				30801,
				30802,
				30803
			},
			LookupMode = ActionLookupMode.ActivePersonality
		};

		public SpecialActionSubmitter NoChitChats = new SpecialActionSubmitter
		{
			SpecialActionCodes = new int[5]
			{
				31000,
				31001,
				31002,
				31003,
				31004
			},
			LookupMode = ActionLookupMode.ActivePersonality
		};

		public SpecialActionSubmitter IWantToKnow = new SpecialActionSubmitter
		{
			SpecialActionCodes = new int[4]
			{
				3031306,
				3031307,
				3031303,
				3031308
			},
			LookupMode = ActionLookupMode.ActivePersonality
		};

		public SpecialActionSubmitter IWantToKnowSingleWord = new SpecialActionSubmitter
		{
			SpecialActionCodes = new int[2]
			{
				30312,
				30313
			},
			LookupMode = ActionLookupMode.ActivePersonality
		};

		public SpecialActionSubmitter IKnow = new SpecialActionSubmitter
		{
			SpecialActionCodes = new int[4]
			{
				30314,
				30315,
				30318,
				30319
			},
			LookupMode = ActionLookupMode.ActivePersonality
		};

		public SpecialActionSubmitter Personalities = new SpecialActionSubmitter
		{
			SpecialActionCodes = new int[4]
			{
				25004,
				25005,
				25006,
				25008
			},
			ActivationType = SpecialActionActivationType.FirstTimeAndEveryFewTimes,
			ActivationParameter = 2
		};

		public SpecialActionSubmitter GamesAndMore = new SpecialActionSubmitter
		{
			SpecialActionCodes = new int[3]
			{
				25009,
				25010,
				25014
			},
			ActivationType = SpecialActionActivationType.FirstTimeAndEveryFewTimes,
			ActivationParameter = 2
		};

		public SpecialActionSubmitter Games = new SpecialActionSubmitter
		{
			SpecialActionCodes = new int[7]
			{
				25011,
				25012,
				25013,
				10020,
				10021,
				100211,
				100212
			},
			ActivationType = SpecialActionActivationType.FirstTimeAndEveryFewTimes,
			ActivationParameter = 2
		};

		public SpecialActionSubmitter PhotosAndVideos = new SpecialActionSubmitter
		{
			SpecialActionCodes = new int[3]
			{
				25017,
				25018,
				25019
			},
			ActivationType = SpecialActionActivationType.FirstTimeAndEveryFewTimes,
			ActivationParameter = 2
		};

		public SpecialActionSubmitter Homework = new SpecialActionSubmitter
		{
			SpecialActionCodes = new int[5]
			{
				25020,
				25021,
				25022,
				25023,
				25024
			},
			ActivationType = SpecialActionActivationType.FirstTimeAndEveryFewTimes,
			ActivationParameter = 2
		};

		public SpecialActionSubmitter CoolWebSiteSearch = new SpecialActionSubmitter
		{
			SpecialActionCodes = new int[3]
			{
				1000491,
				10050,
				10051
			},
			ActivationType = SpecialActionActivationType.FirstTimeAndEveryFewTimes,
			ActivationParameter = 2
		};

		public SpecialActionSubmitter ImageSearch = new SpecialActionSubmitter
		{
			SpecialActionCodes = new int[5]
			{
				1000048,
				10048,
				100048,
				10049,
				100491
			},
			ActivationType = SpecialActionActivationType.FirstTimeAndEveryFewTimes,
			ActivationParameter = 2
		};

		public SpecialActionSubmitter IWantTo_Cinema = new SpecialActionSubmitter
		{
			SpecialActionCodes = new int[3]
			{
				10031,
				10032,
				10033
			}
		};

		public SpecialActionSubmitter IWantTo_Searching = new SpecialActionSubmitter
		{
			SpecialActionCodes = new int[4]
			{
				10042,
				10044,
				100421,
				100422
			}
		};

		public SpecialActionSubmitter AppsAndDownloads = new SpecialActionSubmitter
		{
			SpecialActionCodes = new int[4]
			{
				25025,
				25027,
				25028,
				25029
			}
		};

		public SpecialActionSubmitter MyApps = new SpecialActionSubmitter
		{
			SpecialActionCodes = new int[1]
			{
				25030
			},
			ActivationType = SpecialActionActivationType.FirstTimeAndEveryFewTimes,
			ActivationParameter = 2
		};

		public SpecialActionSubmitter DownloadChitChats = new SpecialActionSubmitter
		{
			SpecialActionCodes = new int[3]
			{
				25032,
				10074,
				25033
			},
			ActivationType = SpecialActionActivationType.FirstTimeAndEveryFewTimes,
			ActivationParameter = 2
		};

		public SpecialActionSubmitter ApplicationStore = new SpecialActionSubmitter
		{
			SpecialActionCodes = new int[1]
			{
				25031
			},
			ActivationType = SpecialActionActivationType.FirstTimeAndEveryFewTimes,
			ActivationParameter = 2
		};

		public SpecialActionSubmitter Options = new SpecialActionSubmitter
		{
			SpecialActionCodes = new int[2]
			{
				25040,
				25041
			},
			ActivationType = SpecialActionActivationType.FirstTimeAndEveryFewTimes,
			ActivationParameter = 2
		};

		private bool disposed = false;

		public static SpecialActions Self
		{
			get
			{
				int num = 3;
				string text = default(string);
				while (true)
				{
					switch (num)
					{
					default:
						num = ((theInstance == null) ? 1 : 0);
						break;
					case 1:
						text = ႣႳ.ႨႷႤ(ႰႤႷ.Ⴍ.ႥႳႳ(1514635492));
						num = ((!File.Exists(text)) ? 5 : 2);
						break;
					case 2:
						theInstance = new SpecialActions();
						theInstance.ႨႤႠ(Ⴈ<SpecialActions>.ႨႷႭ(text));
						num = 4;
						break;
					case 5:
						theInstance = new SpecialActions();
						num = 4;
						break;
					case 4:
						stateSaveTimer = ႥႥႤ.Ⴀ.Ⴃ(ႰႼ, TimeSpan.FromMinutes(5.0), TimeSpan.FromMinutes(5.0));
						num = 0;
						break;
					case 0:
						return theInstance;
					}
				}
			}
		}

		private void ႨႤႠ(SpecialActions Ⴍ)
		{
			Action_Clone.ႨႣႠ(Ⴍ.Action_Clone);
			Action_Delete_Done.ႨႣႠ(Ⴍ.Action_Delete_Done);
			Action_Delete_Selected.ႨႣႠ(Ⴍ.Action_Delete_Selected);
			ActionInfo_Enter.ႨႣႠ(Ⴍ.ActionInfo_Enter);
			ActionInfo_Save.ႨႣႠ(Ⴍ.ActionInfo_Save);
			Chatmates_Enter.ႨႣႠ(Ⴍ.Chatmates_Enter);
			Chatmates_NothingGoingOn.ႨႣႠ(Ⴍ.Chatmates_NothingGoingOn);
			CoolWebSiteSearch.ႨႣႠ(Ⴍ.CoolWebSiteSearch);
			IWantTo_Cinema.ႨႣႠ(Ⴍ.IWantTo_Cinema);
			ImageSearch.ႨႣႠ(Ⴍ.ImageSearch);
			Games.ႨႣႠ(Ⴍ.Games);
			Mood_Enter.ႨႣႠ(Ⴍ.Mood_Enter);
			Mood_Saved.ႨႣႠ(Ⴍ.Mood_Saved);
			Apps_Enter.ႨႣႠ(Ⴍ.Apps_Enter);
			Personality_Action_DesignNew.ႨႣႠ(Ⴍ.Personality_Action_DesignNew);
			Personality_Action_Share.ႨႣႠ(Ⴍ.Personality_Action_Share);
			Personality_Action_Web_Action_OK.ႨႣႠ(Ⴍ.Personality_Action_Web_Action_OK);
			Personality_Delete_Done.ႨႣႠ(Ⴍ.Personality_Delete_Done);
			Personality_Delete_Selected.ႨႣႠ(Ⴍ.Personality_Delete_Selected);
			PushButton_Enter.ႨႣႠ(Ⴍ.PushButton_Enter);
			PushButton_Save.ႨႣႠ(Ⴍ.PushButton_Save);
			Reminder_Enter.ႨႣႠ(Ⴍ.Reminder_Enter);
			Reminder_Save.ႨႣႠ(Ⴍ.Reminder_Save);
			Reminder_Step2.ႨႣႠ(Ⴍ.Reminder_Step2);
			RemindMe_Enter.ႨႣႠ(Ⴍ.RemindMe_Enter);
			Talk2Friends_Enter.ႨႣႠ(Ⴍ.Talk2Friends_Enter);
			Talk2Friends_IMIconClicked.ႨႣႠ(Ⴍ.Talk2Friends_IMIconClicked);
			Talk2Me_Hello_Full.ႨႣႠ(Ⴍ.Talk2Me_Hello_Full);
			Talk2Me_NothingGoingOn.ႨႣႠ(Ⴍ.Talk2Me_NothingGoingOn);
			MoodWords_Enter.ႨႣႠ(Ⴍ.MoodWords_Enter);
			ConflictingMoods.ႨႣႠ(Ⴍ.ConflictingMoods);
			NoChitChats.ႨႣႠ(Ⴍ.NoChitChats);
			IWantToKnow.ႨႣႠ(Ⴍ.IWantToKnow);
			IWantToKnowSingleWord.ႨႣႠ(Ⴍ.IWantToKnowSingleWord);
			IKnow.ႨႣႠ(Ⴍ.IKnow);
			Personalities.ႨႣႠ(Ⴍ.Personalities);
			GamesAndMore.ႨႣႠ(Ⴍ.GamesAndMore);
			PhotosAndVideos.ႨႣႠ(Ⴍ.PhotosAndVideos);
			Homework.ႨႣႠ(Ⴍ.Homework);
			CoolWebSiteSearch.ႨႣႠ(Ⴍ.CoolWebSiteSearch);
			ImageSearch.ႨႣႠ(Ⴍ.ImageSearch);
			IWantTo_Searching.ႨႣႠ(Ⴍ.IWantTo_Searching);
			AppsAndDownloads.ႨႣႠ(Ⴍ.AppsAndDownloads);
			MyApps.ႨႣႠ(Ⴍ.MyApps);
			DownloadChitChats.ႨႣႠ(Ⴍ.DownloadChitChats);
			ApplicationStore.ႨႣႠ(Ⴍ.ApplicationStore);
			Options.ႨႣႠ(Ⴍ.Options);
			ByeBye.ႨႣႠ(Ⴍ.ByeBye);
		}

		private static void ႰႼ()
		{
			ႣႳႳ();
		}

		private static void ႣႳႳ()
		{
			lock (Self)
			{
				string ⴍ = ႣႳ.ႨႷႤ(ႰႭႭ.Ⴅ.ႤႥႥ(1514635496));
				try
				{
					Ⴈ<SpecialActions>.ႳႠ(ⴍ, theInstance);
				}
				catch (Exception ⴍ2)
				{
					ႥႥႨ.Ⴗ.ႨႷႭ(ⴍ2);
				}
			}
		}

		public void Pause()
		{
			Talk2Me_NothingGoingOn.Stop();
			Chatmates_NothingGoingOn.Stop();
		}

		public void Resume()
		{
			Talk2Me_NothingGoingOn.Start(setReferenceTime: true);
			Chatmates_NothingGoingOn.Start(setReferenceTime: true);
		}

		public void Dispose()
		{
			Dispose(disposing: true);
			GC.SuppressFinalize(this);
		}

		protected void Dispose(bool disposing)
		{
			//Discarded unreachable code: IL_0002, IL_0012, IL_002c, IL_0050, IL_006b
			while (!disposed)
			{
				if ((617 + 617 * 617) % 2 == 0)
				{
					if (!disposing)
					{
						goto IL_0004;
					}
					if (960 >= 960 - 402)
					{
						stateSaveTimer.Dispose();
						goto IL_0038;
					}
					goto IL_003d;
				}
				continue;
				IL_003d:
				theInstance = null;
				if (131 > 131 - 88)
				{
					goto IL_0004;
				}
				goto IL_0038;
				IL_0004:
				if ((6 + 6 * 6) % 2 == 0)
				{
					break;
				}
				goto IL_0038;
				IL_0038:
				ႣႳႳ();
				goto IL_003d;
			}
			disposed = true;
		}
	}
	[Serializable]
	public class SpecialActionSubmitter
	{
		private DateTime lastReferenceDateTime;

		private int lastReferenceValue = int.MinValue;

		private bool firstTimeDone;

		[NonSerialized]
		private int specialActionCode = int.MinValue;

		[NonSerialized]
		private int[] specialActionCodes;

		private int lastUsedIndex;

		[NonSerialized]
		private SpecialActionActivationType activationType;

		[NonSerialized]
		private int activationParameter;

		private ActionLookupMode lookupMode;

		[NonSerialized]
		private int intervalToCheck = 60000;

		[NonSerialized]
		private int intervalToResponse = 300000;

		[NonSerialized]
		private int originalIntervalToResponse = 300000;

		[NonSerialized]
		private ႥႥႤ.Ⴀ inActivityTimer;

		public DateTime LastReferenceDateTime
		{
			get
			{
				return lastReferenceDateTime;
			}
			set
			{
				lastReferenceDateTime = value;
			}
		}

		public int LastReferenceValue
		{
			get
			{
				return lastReferenceValue;
			}
			set
			{
				lastReferenceValue = value;
			}
		}

		public bool FirstTimeDone
		{
			get
			{
				return firstTimeDone;
			}
			set
			{
				firstTimeDone = value;
			}
		}

		[XmlIgnore]
		public int SpecialActionCode
		{
			get
			{
				return specialActionCode;
			}
			set
			{
				specialActionCode = value;
			}
		}

		[XmlIgnore]
		public int[] SpecialActionCodes
		{
			get
			{
				return specialActionCodes;
			}
			set
			{
				specialActionCodes = value;
			}
		}

		public int LastUsedIndex
		{
			get
			{
				return lastUsedIndex;
			}
			set
			{
				lastUsedIndex = value;
			}
		}

		[XmlIgnore]
		public SpecialActionActivationType ActivationType
		{
			get
			{
				return activationType;
			}
			set
			{
				activationType = value;
			}
		}

		[XmlIgnore]
		public int ActivationParameter
		{
			get
			{
				return activationParameter;
			}
			set
			{
				activationParameter = value;
			}
		}

		[XmlIgnore]
		public ActionLookupMode LookupMode
		{
			get
			{
				return lookupMode;
			}
			set
			{
				lookupMode = value;
			}
		}

		[XmlIgnore]
		public int IntervalToCheck
		{
			get
			{
				return intervalToCheck;
			}
			set
			{
				intervalToCheck = value;
			}
		}

		[XmlIgnore]
		public int IntervalToResponse
		{
			get
			{
				return intervalToResponse;
			}
			set
			{
				intervalToResponse = value;
			}
		}

		public void Start(bool setReferenceTime)
		{
			//Discarded unreachable code: IL_0005, IL_0028, IL_0073, IL_0088, IL_0095, IL_0099, IL_00b5, IL_00d7, IL_00f2, IL_0114
			while (true)
			{
				if (activationType != SpecialActionActivationType.Inactivity)
				{
					if (158 < 158 - 35)
					{
						continue;
					}
					goto IL_002a;
				}
				goto IL_0070;
				IL_002a:
				if (activationType == SpecialActionActivationType.InactivityDeminishing)
				{
					goto IL_0070;
				}
				if (927 < 927 - 612)
				{
					continue;
				}
				int num = (activationType == SpecialActionActivationType.InactivityOneTime) ? 1 : 0;
				goto IL_0075;
				IL_0070:
				num = 1;
				goto IL_0075;
				IL_0075:
				if (num != 0)
				{
					if (!setReferenceTime)
					{
						break;
					}
					if (937 >= 937 - 11)
					{
						do
						{
							lastReferenceDateTime = DateTime.Now;
						}
						while (false);
						break;
					}
					continue;
				}
				if (false)
				{
					goto IL_002a;
				}
				return;
			}
			bool flag = inActivityTimer != null;
			while (flag)
			{
				inActivityTimer.ႳႭ(0.0, intervalToCheck);
				if (false)
				{
					continue;
				}
				return;
			}
			if (132 > 132 - 7)
			{
				inActivityTimer = ႥႥႤ.Ⴀ.ႳႷ(ႨႷႨ, intervalToCheck);
			}
		}

		public void TrySubmit()
		{
			try
			{
				ႨႷႰ();
			}
			catch (Exception ⴓ)
			{
				ႥႥႨ.Ⴗ.ႳႤ(ႰႤႷ.Ⴍ.ႥႳႳ(1514635493), ⴓ);
			}
		}

		private void ႨႷႰ()
		{
			int num = 25;
			bool flag2 = default(bool);
			ActionVolume volume = default(ActionVolume);
			int num3 = default(int);
			bool flag = default(bool);
			while (true)
			{
				int num6;
				int num2;
				switch (num)
				{
				case 9:
					return;
				case 31:
					num = 5;
					continue;
				case 47:
					flag2 = true;
					num = 5;
					continue;
				case 28:
					flag2 = true;
					volume = ActionVolume.Lower;
					num = 5;
					continue;
				case 41:
					flag2 = (lastReferenceDateTime.AddSeconds(activationParameter) < DateTime.Now);
					num = 5;
					continue;
				case 26:
					num = (firstTimeDone ? 11 : 23);
					continue;
				case 23:
					firstTimeDone = true;
					flag2 = true;
					num = 27;
					continue;
				case 11:
					num = ((lastReferenceValue != int.MinValue) ? 13 : 46);
					continue;
				case 46:
					lastReferenceValue = activationParameter - 1;
					num = 35;
					continue;
				case 13:
					lastReferenceValue--;
					num = 35;
					continue;
				case 35:
					num = ((lastReferenceValue != 0) ? 12 : 16);
					continue;
				case 16:
					lastReferenceValue = activationParameter;
					flag2 = true;
					num = 12;
					continue;
				case 12:
					num = 27;
					continue;
				case 27:
					num = 5;
					continue;
				case 33:
					num = ((lastReferenceValue != int.MinValue) ? 8 : 17);
					continue;
				case 17:
					lastReferenceValue = activationParameter - 1;
					num = 15;
					continue;
				case 8:
					lastReferenceValue--;
					num = 15;
					continue;
				case 15:
					num = ((lastReferenceValue != 0) ? 5 : 20);
					continue;
				case 20:
					lastReferenceValue = activationParameter;
					flag2 = true;
					num = 5;
					continue;
				case 5:
					num = ((!flag2) ? 9 : 37);
					continue;
				case 37:
					num = (ႥႥႳႰ.Ⴍ.Ⴀ ? 43 : 0);
					continue;
				case 43:
					num = ((specialActionCode != int.MinValue) ? 38 : 32);
					continue;
				case 32:
					num6 = ((lastUsedIndex <= specialActionCodes.Length - 1) ? 1 : 0);
					goto IL_0310;
				case 38:
					num6 = 1;
					goto IL_0310;
				case 40:
					lastUsedIndex = 0;
					num = 34;
					continue;
				case 34:
					num3 = lastUsedIndex;
					flag = false;
					num = 45;
					continue;
				case 45:
					num = ((specialActionCode == int.MinValue) ? 39 : 21);
					continue;
				case 21:
				{
					int num5;
					switch (lookupMode)
					{
					default:
						num5 = 4;
						break;
					case ActionLookupMode.DefaultPersonality:
						num5 = 24;
						break;
					case ActionLookupMode.ActivePersonality:
						num5 = 14;
						break;
					case ActionLookupMode.Both:
						num5 = 29;
						break;
					}
					num = num5;
					continue;
				}
				case 4:
					num = 42;
					continue;
				case 24:
					SpecialActionUtils.SubmitDefaultSpecialAction(specialActionCode, volume);
					num = 42;
					continue;
				case 14:
					SpecialActionUtils.SubmitActiveSpecialAction(specialActionCode, volume);
					num = 42;
					continue;
				case 29:
					num = (SpecialActionUtils.SubmitDefaultSpecialAction(specialActionCode, volume) ? 42 : 22);
					continue;
				case 22:
					SpecialActionUtils.SubmitActiveSpecialAction(specialActionCode, volume);
					num = 42;
					continue;
				case 42:
					flag = true;
					num = 7;
					continue;
				case 39:
				{
					int num4;
					switch (lookupMode)
					{
					default:
						num4 = 2;
						break;
					case ActionLookupMode.DefaultPersonality:
						num4 = 48;
						break;
					case ActionLookupMode.ActivePersonality:
						num4 = 19;
						break;
					case ActionLookupMode.Both:
						num4 = 3;
						break;
					}
					num = num4;
					continue;
				}
				case 2:
					num = 30;
					continue;
				case 48:
					flag = SpecialActionUtils.SubmitDefaultSpecialAction(specialActionCodes[lastUsedIndex], volume);
					num = 30;
					continue;
				case 19:
					flag = SpecialActionUtils.SubmitActiveSpecialAction(specialActionCodes[lastUsedIndex], volume);
					num = 30;
					continue;
				case 3:
					flag = SpecialActionUtils.SubmitDefaultSpecialAction(specialActionCodes[lastUsedIndex], volume);
					num = (flag ? 30 : 10);
					continue;
				case 10:
					flag = SpecialActionUtils.SubmitActiveSpecialAction(specialActionCodes[lastUsedIndex], volume);
					num = 30;
					continue;
				case 30:
					lastUsedIndex++;
					num = ((lastUsedIndex <= specialActionCodes.Length - 1) ? 18 : 6);
					continue;
				case 6:
					lastUsedIndex = 0;
					num = 18;
					continue;
				case 18:
					num = 7;
					continue;
				case 7:
					num = (flag ? 1 : 44);
					continue;
				case 44:
					num2 = ((num3 != lastUsedIndex) ? 1 : 0);
					goto IL_0529;
				case 1:
					num2 = 0;
					goto IL_0529;
				case 36:
					num = 0;
					continue;
				case 0:
					{
						lastReferenceDateTime = DateTime.Now;
						num = 9;
						continue;
					}
					IL_0529:
					num = ((num2 != 0) ? 45 : 36);
					continue;
					IL_0310:
					num = ((num6 != 0) ? 34 : 40);
					continue;
				}
				flag2 = false;
				volume = ActionVolume.Normal;
				int num7;
				switch (activationType)
				{
				default:
					num7 = 31;
					break;
				case SpecialActionActivationType.Everytime:
					num7 = 47;
					break;
				case SpecialActionActivationType.EverytimeMinInterval:
					num7 = 41;
					break;
				case SpecialActionActivationType.Inactivity:
					num7 = 28;
					break;
				case SpecialActionActivationType.EveryFewTimes:
					num7 = 33;
					break;
				case SpecialActionActivationType.FirstTimeAndEveryFewTimes:
					num7 = 26;
					break;
				case SpecialActionActivationType.InactivityDeminishing:
					num7 = 28;
					break;
				case SpecialActionActivationType.InactivityOneTime:
					num7 = 28;
					break;
				}
				num = num7;
			}
		}

		public void Stop()
		{
			int num = 2;
			while (true)
			{
				switch (num)
				{
				case 0:
					return;
				default:
					num = ((inActivityTimer != null) ? 1 : 0);
					break;
				case 1:
					inActivityTimer.ႳႣႳ();
					inActivityTimer.Dispose();
					inActivityTimer = null;
					num = 0;
					break;
				}
			}
		}

		private void ႨႷႨ()
		{
			//Discarded unreachable code: IL_0005, IL_0025, IL_0047, IL_005e, IL_0080, IL_00aa, IL_00ef, IL_0114
			while (true)
			{
				if ((DateTime.Now.Ticks - lastReferenceDateTime.Ticks) / 10000 > intervalToResponse)
				{
					if (72 < 72 - 64)
					{
					}
					goto IL_000a;
				}
				goto IL_0028;
				IL_0097:
				bool flag;
				if (flag)
				{
					break;
				}
				if (796 <= 796 - 506)
				{
					goto IL_0049;
				}
				intervalToResponse *= 2;
				if ((990 + 990 * 990) % 2 == 0)
				{
					break;
				}
				continue;
				IL_0028:
				flag = (activationType != SpecialActionActivationType.InactivityOneTime);
				if (!flag)
				{
					if (false)
					{
						goto IL_0010;
					}
					goto IL_0049;
				}
				goto IL_0060;
				IL_0049:
				Stop();
				if ((495 + 495 * 495) % 2 == 0)
				{
					goto IL_0060;
				}
				goto IL_0097;
				IL_0010:
				lastReferenceDateTime = DateTime.Now;
				if (81 <= 81 - 73)
				{
					goto IL_000a;
				}
				goto IL_0028;
				IL_000a:
				ႨႷႰ();
				goto IL_0010;
				IL_0060:
				if (activationType != SpecialActionActivationType.InactivityDeminishing)
				{
					break;
				}
				if (483 < 483 - 274)
				{
					break;
				}
				flag = (intervalToResponse / originalIntervalToResponse >= 10);
				goto IL_0097;
			}
		}

		public void SetLastReferenceDateTime()
		{
			lastReferenceDateTime = DateTime.Now;
		}

		internal void ႨႣႠ(SpecialActionSubmitter Ⴍ)
		{
			firstTimeDone = Ⴍ.firstTimeDone;
			lastReferenceDateTime = Ⴍ.lastReferenceDateTime;
			lastReferenceValue = Ⴍ.lastReferenceValue;
			lastUsedIndex = Ⴍ.lastUsedIndex;
		}
	}
	public class SpecialActionUtils
	{
		private static ႷႭႳ.Ⴈ Ⴐ;

		private static Personality Ⴐ;

		public static bool SubmitDefaultSpecialAction(int specialActionCode)
		{
			ႨႷႰ();
			return SubmitSpecialAction(specialActionCode, Ⴐ);
		}

		public static bool SubmitDefaultSpecialAction(int specialActionCode, ActionVolume volume)
		{
			ႨႷႰ();
			return SubmitSpecialAction(specialActionCode, Ⴐ, volume);
		}

		public static bool SubmitActiveSpecialAction(int specialActionCode)
		{
			return SubmitSpecialAction(specialActionCode, ႭႨႰ.Ⴐ.Ⴐ.Ⴃ.Ⴓ.ႷႳ());
		}

		public static bool SubmitActiveSpecialAction(int specialActionCode, ActionVolume volume)
		{
			return SubmitSpecialAction(specialActionCode, ႭႨႰ.Ⴐ.Ⴐ.Ⴃ.Ⴓ.ႷႳ(), volume);
		}

		public static bool SubmitSpecialAction(int specialActionCode, Personality personality)
		{
			int num = 1;
			bool result = default(bool);
			while (true)
			{
				switch (num)
				{
				default:
					ႨႷႰ();
					num = ((!personality.SpecialActionsByCode.ContainsKey(specialActionCode)) ? 3 : 2);
					break;
				case 2:
					((ႷႭႳ.Ⴈ)SpecialActionUtils.Ⴐ).ႥႠ(personality, specialActionCode);
					result = true;
					num = 0;
					break;
				case 3:
					result = false;
					num = 0;
					break;
				case 0:
					return result;
				}
			}
		}

		public static bool SubmitSpecialAction(int specialActionCode, Personality personality, ActionVolume volume)
		{
			//Discarded unreachable code: IL_0002, IL_0015, IL_0029, IL_0053
			bool result;
			do
			{
				ႨႷႰ();
				if (!personality.SpecialActionsByCode.ContainsKey(specialActionCode))
				{
					result = false;
					continue;
				}
				if (386 >= 386 - 358)
				{
				}
				((ႷႭႳ.Ⴈ)SpecialActionUtils.Ⴐ).Ⴍ(personality, specialActionCode, (ႷႭႨ.Ⴓ)null, volume);
				result = true;
				break;
			}
			while (false);
			return result;
		}

		private static void ႨႷႰ()
		{
			//Discarded unreachable code: IL_0002, IL_004f, IL_006f
			do
			{
				if (SpecialActionUtils.Ⴐ != null)
				{
					return;
				}
			}
			while (false);
			do
			{
				SpecialActionUtils.Ⴐ = (Personality)(ႭႨႰ.Ⴐ.Ⴐ.Ⴃ as ႷႭႳ.Ⴈ);
				Ⴐ = ႭႨႰ.Ⴐ.Ⴐ.Ⴃ.Ⴓ.Ⴈ.ႰႨ(ႰႤႷ.Ⴍ.ႥႳႳ(1514635498));
			}
			while (false);
		}
	}
}
namespace Rondyo.Chatman.GUI.Infrastructure.SplashScreen
{
	public sealed class BaseSplashScreenManager : ႥႥႨႣ.Ⴍ
	{
		public delegate void SetLabelTextRequestedDelegate(string newText);

		public delegate void ShowWindowRequestedDelegate(bool isVisible);

		public SetLabelTextRequestedDelegate SetLabelTextRequested;

		public ShowWindowRequestedDelegate ShowWindowRequested;

		private ႥႥႨႣ.Ⴐ Ⴐ;

		public ႥႥႨႣ.Ⴐ Mode
		{
			get
			{
				return Ⴐ;
			}
			set
			{
				//Discarded unreachable code: IL_0005, IL_0013, IL_001a, IL_002a, IL_006e, IL_00a0, IL_00b9, IL_00c0, IL_00d1, IL_00dc, IL_0123
				while (true)
				{
					ႥႥႨ.Ⴗ.ႳႥ(ႰႤႷ.Ⴍ.ႥႳႳ(1514635475), Ⴐ, value);
					int num;
					if (Ⴐ == ႥႥႨႣ.Ⴐ.Ⴐ)
					{
						if (6 <= 6 - 3)
						{
							goto IL_001c;
						}
						num = ((value == ႥႥႨႣ.Ⴐ.Ⴗ) ? 1 : 0);
					}
					else
					{
						num = 1;
					}
					if (num != 0)
					{
						switch (value)
						{
						case ႥႥႨႣ.Ⴐ.Ⴈ:
						case ႥႥႨႣ.Ⴐ.Ⴀ:
							break;
						case ႥႥႨႣ.Ⴐ.Ⴅ:
						case ႥႥႨႣ.Ⴐ.Ⴐ:
						case ႥႥႨႣ.Ⴐ.Ⴗ:
							goto end_IL_00de;
						default:
							if (138 <= 138 - 47)
							{
								goto end_IL_00de;
							}
							throw new ArgumentOutOfRangeException(ႰႭႭ.Ⴅ.ႤႥႥ(1514635468));
						case ႥႥႨႣ.Ⴐ.Ⴄ:
							ႨႣႣ(Ⴓ: false);
							goto end_IL_00de;
						}
						goto IL_001c;
					}
					if (758 > 758 - 294)
					{
						return;
					}
					continue;
					IL_001c:
					ႳႠ(string.Empty, value);
					break;
					continue;
					end_IL_00de:
					break;
				}
				do
				{
					Ⴐ = value;
					ႥႥႨ.Ⴗ.ႳႥ(ႰႭႭ.Ⴅ.ႤႥႥ(1514635469), Ⴐ);
				}
				while (338 <= 338 - 198);
			}
		}

		private void ႳႠ(string Ⴓ, ႥႥႨႣ.Ⴐ Ⴅ)
		{
			//Discarded unreachable code: IL_0005, IL_0012, IL_0039, IL_0048, IL_004c, IL_005f, IL_0072, IL_0076, IL_0090, IL_00b3
			string text;
			if (string.IsNullOrEmpty(Ⴓ))
			{
				text = string.Empty;
			}
			else
			{
				if (715 < 715 - 619)
				{
					goto IL_0018;
				}
				text = Environment.NewLine + Ⴓ;
			}
			Ⴓ = text;
			goto IL_0018;
			IL_0018:
			switch (Ⴅ)
			{
			default:
				if ((668 + 668 * 668) % 2 == 0)
				{
					return;
				}
				break;
			case ႥႥႨႣ.Ⴐ.Ⴈ:
				Ⴓ = Resources.StartingUp + Ⴓ;
				break;
			case ႥႥႨႣ.Ⴐ.Ⴀ:
				Ⴓ = Resources.FirstTimeStartup + Ⴓ;
				break;
			}
			ႨႣႠ(Ⴓ);
			ႨႣႣ(Ⴓ: true);
			if (475 > 475 - 210)
			{
			}
		}

		public void SetSplashScreenText(string textMessage)
		{
			ႳႠ(textMessage, Ⴐ);
		}

		private void ႨႣႠ(string Ⴓ)
		{
			//Discarded unreachable code: IL_0002, IL_0033, IL_0052
			do
			{
				if (SetLabelTextRequested == null)
				{
					return;
				}
			}
			while (619 < 619 - 309);
			do
			{
				SetLabelTextRequested(Ⴓ.Replace(ႰႤႷ.Ⴍ.ႥႳႳ(1514635472), Environment.NewLine));
			}
			while (false);
		}

		private void ႨႣႣ(bool Ⴓ)
		{
			//Discarded unreachable code: IL_0002, IL_001d, IL_003b
			while (ShowWindowRequested != null)
			{
				if (false)
				{
				}
				ShowWindowRequested(Ⴓ);
				if (137 >= 137 - 90)
				{
					break;
				}
			}
		}
	}
	public static class FadeFormRoutines
	{
		private static int Ⴀ = 5;

		private static int Ⴄ = 500;

		private static readonly ႥႥႤ.Ⴀ Ⴍ;

		private static Form Ⴅ;

		private static ႷႭႭ.Ⴍ Ⴅ;

		private static double Ⴐ;

		private static ႥႥႨႣ.Ⴀ.ႣႣ Ⴐ;

		private static ႥႥႨႣ.Ⴀ.ႣႣ Ⴈ;

		private static ႥႥႨႣ.Ⴀ.ႣႣ Ⴍ = (ႥႥႨႣ.Ⴀ.ႣႣ)(object)ႥႥႤ.Ⴀ.ႳႠ(ႭႠ, Ⴄ / Ⴀ);

		unsafe static FadeFormRoutines()
		{
			*(double*)(&FadeFormRoutines.Ⴐ) = 1.0;
		}

		public unsafe static void FadeIn(Form splashScreen, int fadeTimeMs)
		{
			Ⴄ = fadeTimeMs;
			FadeFormRoutines.Ⴅ = (ႷႭႭ.Ⴍ)(object)splashScreen;
			*(double*)(&FadeFormRoutines.Ⴐ) = 1.0 / (double)Ⴀ;
			((ႥႥႤ.Ⴀ)(object)FadeFormRoutines.Ⴍ).ႳႣႣ();
		}

		public unsafe static void FadeOut(Form splashScreen, int fadeTimeMs, ႷႭႭ.Ⴍ onCloseDelegate)
		{
			Ⴄ = fadeTimeMs;
			FadeFormRoutines.Ⴅ = (ႷႭႭ.Ⴍ)(object)splashScreen;
			*(double*)(&FadeFormRoutines.Ⴐ) = -1.0 / (double)Ⴀ;
			Ⴅ = onCloseDelegate;
			((ႥႥႤ.Ⴀ)(object)FadeFormRoutines.Ⴍ).ႳႣႣ();
		}

		private unsafe static void ႭႠ()
		{
			int num = 7;
			double num2 = default(double);
			while (true)
			{
				switch (num)
				{
				case 2:
					return;
				default:
					num = ((FadeFormRoutines.Ⴅ != null) ? 4 : 12);
					break;
				case 12:
					((ႥႥႤ.Ⴀ)(object)FadeFormRoutines.Ⴍ).ႳႣႳ();
					num = 2;
					break;
				case 4:
					num2 = ((Form)(object)FadeFormRoutines.Ⴅ).Opacity + *(double*)(&FadeFormRoutines.Ⴐ);
					num = ((!(num2 > 1.0)) ? 10 : 8);
					break;
				case 8:
					num = ((Ⴐ != null) ? 1 : 3);
					break;
				case 3:
					Ⴐ = delegate
					{
						((Form)(object)FadeFormRoutines.Ⴅ).Opacity = 1.0;
					};
					num = 1;
					break;
				case 1:
					ႥႥႨႣ.Ⴀ.ႨႠႠ(Ⴐ);
					((ႥႥႤ.Ⴀ)(object)FadeFormRoutines.Ⴍ).ႳႣႳ();
					num = 2;
					break;
				case 10:
					num = ((!(num2 < 0.0)) ? 5 : 6);
					break;
				case 6:
					num = ((Ⴈ != null) ? 13 : 11);
					break;
				case 11:
					Ⴈ = delegate
					{
						//Discarded unreachable code: IL_0002, IL_001a, IL_0048
						while (true)
						{
							((Form)(object)FadeFormRoutines.Ⴅ).Opacity = 0.0;
							bool flag = Ⴅ == null;
							while (true)
							{
								if (flag)
								{
									return;
								}
								if (325 <= 325 - 101)
								{
									break;
								}
								Ⴅ();
								if ((22 + 22 * 22) % 2 == 0)
								{
									return;
								}
							}
						}
					};
					num = 13;
					break;
				case 13:
					ႥႥႨႣ.Ⴀ.ႨႠႠ(Ⴈ);
					((ႥႥႤ.Ⴀ)(object)FadeFormRoutines.Ⴍ).ႳႣႳ();
					num = 2;
					break;
				case 5:
					num = ((Ⴍ != null) ? 9 : 0);
					break;
				case 0:
					Ⴍ = delegate
					{
						((Form)(object)FadeFormRoutines.Ⴅ).Opacity += *(double*)(&FadeFormRoutines.Ⴐ);
					};
					num = 9;
					break;
				case 9:
					ႥႥႨႣ.Ⴀ.ႨႠႠ(Ⴍ);
					num = 2;
					break;
				}
			}
		}

		private static void <DoFadeStep>b__0()
		{
			((Form)(object)FadeFormRoutines.Ⴅ).Opacity = 1.0;
		}

		private static void <DoFadeStep>b__1()
		{
			//Discarded unreachable code: IL_0002, IL_001a, IL_0048
			while (true)
			{
				((Form)(object)FadeFormRoutines.Ⴅ).Opacity = 0.0;
				bool flag = Ⴅ == null;
				while (true)
				{
					if (!flag)
					{
						if (325 > 325 - 101)
						{
							Ⴅ();
							if (false)
							{
								continue;
							}
							return;
						}
						break;
					}
					return;
				}
			}
		}

		private unsafe static void <DoFadeStep>b__2()
		{
			((Form)(object)FadeFormRoutines.Ⴅ).Opacity += *(double*)(&FadeFormRoutines.Ⴐ);
		}
	}
	public sealed class SplashScreenForm : Form
	{
		private sealed class <>c__DisplayClass5
		{
			public string splashScreenText;

			public void <SetLabelText>b__4()
			{
				ႥႥႨ.Ⴗ.ႳႥ(ႰႤႷ.Ⴍ.ႥႳႳ(1514635433), splashScreenText);
				ႭႠ().Ⴈ.Text = splashScreenText;
				ႭႠ().Ⴈ.Top = ႭႠ().Height - ႭႠ().Ⴈ.Height - 2;
			}
		}

		private static SplashScreenForm Ⴈ;

		private static BaseSplashScreenManager Ⴈ;

		private readonly Label Ⴈ;

		private IContainer Ⴄ = null;

		private static ႥႥႨႣ.Ⴀ.ႣႣ Ⴍ;

		private static ႥႥႨႣ.Ⴀ.ႣႣ Ⴗ;

		private static ႥႥႨႣ.Ⴀ.ႣႣ Ⴐ;

		public static BaseSplashScreenManager SplashScreenManager
		{
			get
			{
				int num = 1;
				while (true)
				{
					switch (num)
					{
					default:
						num = ((SplashScreenForm.Ⴈ != null) ? 2 : 0);
						break;
					case 0:
					{
						SplashScreenForm.Ⴈ = (Label)(object)new BaseSplashScreenManager();
						Label ⴈ = SplashScreenForm.Ⴈ;
						((BaseSplashScreenManager)(object)ⴈ).SetLabelTextRequested = (BaseSplashScreenManager.SetLabelTextRequestedDelegate)Delegate.Combine(((BaseSplashScreenManager)(object)ⴈ).SetLabelTextRequested, new BaseSplashScreenManager.SetLabelTextRequestedDelegate(ႤႨႨ));
						Label ⴈ2 = SplashScreenForm.Ⴈ;
						((BaseSplashScreenManager)(object)ⴈ2).ShowWindowRequested = (BaseSplashScreenManager.ShowWindowRequestedDelegate)Delegate.Combine(((BaseSplashScreenManager)(object)ⴈ2).ShowWindowRequested, new BaseSplashScreenManager.ShowWindowRequestedDelegate(ႤႨႤ));
						num = 2;
						break;
					}
					case 2:
						return (BaseSplashScreenManager)(object)SplashScreenForm.Ⴈ;
					}
				}
			}
		}

		private SplashScreenForm()
		{
			//Discarded unreachable code: IL_0002, IL_00b4, IL_00bc, IL_00c1
			ႭႤ();
			base.FormBorderStyle = FormBorderStyle.None;
			base.TopMost = true;
			base.Menu = null;
			base.FormBorderStyle = FormBorderStyle.None;
			Bitmap bitmap = new Bitmap(ႥႥႥ.Ⴗ.ႨႷႣ(ႰႭႭ.Ⴅ.ႤႥႥ(1514635493)));
			base.Width = bitmap.Width;
			base.Height = bitmap.Height;
			BackgroundImage = bitmap;
			Ⴈ = new Label
			{
				Text = ႰႭႭ.Ⴅ.ႤႥႥ(1514635498),
				Font = new Font(ႰႭႭ.Ⴅ.ႤႥႥ(1514635499), 15f, FontStyle.Bold),
				TextAlign = ContentAlignment.TopLeft,
				RightToLeft = (ႣႳ.Ⴐ.TextInfo.IsRightToLeft ? RightToLeft.Yes : RightToLeft.No),
				ForeColor = Color.White,
				BackColor = Color.Transparent,
				Left = 5,
				AutoSize = true
			};
			base.Controls.Add(Ⴈ);
		}

		private static SplashScreenForm ႭႠ()
		{
			//Discarded unreachable code: IL_0002, IL_001e, IL_0034, IL_0053, IL_0073
			while (true)
			{
				bool flag = SplashScreenForm.Ⴈ != null;
				while (true)
				{
					if (!flag)
					{
						if (false)
						{
							break;
						}
						while (Ⴍ == null)
						{
							if (266 < 266 - 13)
							{
								continue;
							}
							goto IL_0036;
						}
						goto IL_0007;
					}
					goto IL_0075;
					IL_0007:
					ႥႥႨႣ.Ⴀ.ႨႠႠ(Ⴍ);
					if (326 < 326 - 102)
					{
						continue;
					}
					goto IL_0075;
					IL_0075:
					return (SplashScreenForm)(object)SplashScreenForm.Ⴈ;
					IL_0036:
					Ⴍ = delegate
					{
						SplashScreenForm splashScreenForm = new SplashScreenForm();
						splashScreenForm.ShowInTaskbar = false;
						splashScreenForm.Opacity = 0.0;
						splashScreenForm.StartPosition = FormStartPosition.CenterScreen;
						SplashScreenForm.Ⴈ = (Label)(object)splashScreenForm;
					};
					if ((77 + 77 * 77) % 2 == 0)
					{
						goto IL_0007;
					}
					goto IL_0075;
				}
			}
		}

		private static void ႤႨႨ(string Ⴍ)
		{
			<>c__DisplayClass5 CS$<>8__locals0 = new <>c__DisplayClass5();
			CS$<>8__locals0.splashScreenText = Ⴍ;
			ႥႥႨႣ.Ⴀ.ႨႠႠ(delegate
			{
				ႥႥႨ.Ⴗ.ႳႥ(ႰႤႷ.Ⴍ.ႥႳႳ(1514635433), CS$<>8__locals0.splashScreenText);
				ႭႠ().Ⴈ.Text = CS$<>8__locals0.splashScreenText;
				ႭႠ().Ⴈ.Top = ႭႠ().Height - ႭႠ().Ⴈ.Height - 2;
			});
		}

		private static void ႤႨႤ(bool Ⴍ)
		{
			int num = 1;
			while (true)
			{
				switch (num)
				{
				case 6:
					return;
				default:
					num = ((!Ⴍ) ? 3 : 0);
					break;
				case 0:
					num = ((Ⴗ != null) ? 4 : 7);
					break;
				case 7:
					Ⴗ = delegate
					{
						ႭႠ().Show();
						ႭႠ().Opacity = 1.0;
					};
					num = 4;
					break;
				case 4:
					ႥႥႨႣ.Ⴀ.ႨႠႠ(Ⴗ);
					num = 6;
					break;
				case 3:
					num = ((ႭႠ() == null) ? 6 : 5);
					break;
				case 5:
					num = ((Ⴐ != null) ? 8 : 2);
					break;
				case 2:
					Ⴐ = delegate
					{
						ႭႠ().Close();
						SplashScreenForm.Ⴈ = null;
					};
					num = 8;
					break;
				case 8:
					ႥႥႨႣ.Ⴀ.ႨႠႠ(Ⴐ);
					num = 6;
					break;
				}
			}
		}

		private void ႤႠ(object Ⴍ, FormClosingEventArgs Ⴓ)
		{
			//Discarded unreachable code: IL_0002, IL_002a, IL_002f, IL_0041, IL_0059, IL_006f
			while (true)
			{
				if (SplashScreenManager.Mode != ႥႥႨႣ.Ⴐ.Ⴄ)
				{
					if (63 >= 63 - 5)
					{
						while (SplashScreenManager.Mode != 0)
						{
							if (false)
							{
								continue;
							}
							goto IL_0020;
						}
					}
				}
				int num = 0;
				goto IL_0031;
				IL_0020:
				num = ((!ႥႥႨႣ.Ⴀ.Ⴐ) ? 1 : 0);
				goto IL_0031;
				IL_0031:
				bool flag = (byte)num != 0;
				while (true)
				{
					if (flag)
					{
						return;
					}
					if (false)
					{
						break;
					}
					Ⴓ.Cancel = false;
					if (224 > 224 - 85)
					{
						return;
					}
				}
			}
		}

		protected override void Dispose(bool disposing)
		{
			int num = 0;
			while (true)
			{
				int num2;
				switch (num)
				{
				default:
					num = ((!disposing) ? 4 : 3);
					break;
				case 3:
					num2 = ((Ⴄ == null) ? 1 : 0);
					goto IL_0032;
				case 4:
					num2 = 1;
					goto IL_0032;
				case 2:
					Ⴄ.Dispose();
					num = 1;
					break;
				case 1:
					{
						base.Dispose(disposing);
						return;
					}
					IL_0032:
					num = ((num2 != 0) ? 1 : 2);
					break;
				}
			}
		}

		private void ႭႤ()
		{
			ComponentResourceManager componentResourceManager = new ComponentResourceManager(typeof(SplashScreenForm));
			SuspendLayout();
			base.AutoScaleDimensions = new SizeF(6f, 13f);
			base.AutoScaleMode = AutoScaleMode.Font;
			base.ClientSize = new Size(284, 262);
			base.Icon = (Icon)componentResourceManager.GetObject(ႰႭႭ.Ⴅ.ႤႥႥ(1514635495));
			base.Name = ႰႭႭ.Ⴅ.ႤႥႥ(1514635492);
			base.FormClosing += ႤႠ;
			ResumeLayout(performLayout: false);
		}

		private static void <get_FormInstance>b__1()
		{
			SplashScreenForm splashScreenForm = new SplashScreenForm();
			splashScreenForm.ShowInTaskbar = false;
			splashScreenForm.Opacity = 0.0;
			splashScreenForm.StartPosition = FormStartPosition.CenterScreen;
			SplashScreenForm.Ⴈ = (Label)(object)splashScreenForm;
		}

		private static void <InternalShow>b__7()
		{
			ႭႠ().Show();
			ႭႠ().Opacity = 1.0;
		}

		private static void <InternalShow>b__8()
		{
			ႭႠ().Close();
			SplashScreenForm.Ⴈ = null;
		}
	}
}
namespace Rondyo.Chatman.GUI.Infrastructure.WebBrowser
{
	public enum BrowserCommand
	{
		GoBack = 1041,
		GoForward = 1058
	}
	public class BrowserHostController : IDisposable
	{
		private sealed class <>c__DisplayClass1
		{
			public string browserHostMainWindowClassName;

			public List<IntPtr> childrenToKill;

			public BrowserHostController <>4__this;

			public unsafe bool <Hide>b__0(IntPtr pHwnd, IntPtr parameter)
			{
				//Discarded unreachable code: IL_0005, IL_000b, IL_0040, IL_0046, IL_006f, IL_008d, IL_00bc, IL_00d2
				StringBuilder stringBuilder = default(StringBuilder);
				bool result;
				do
				{
					if (!(*(IntPtr*)(&<>4__this.Ⴀ) == pHwnd))
					{
						stringBuilder = new StringBuilder(256);
						goto IL_001a;
					}
					if ((655 + 655 * 655) % 2 == 0)
					{
						result = true;
						break;
					}
					goto IL_0048;
					IL_001a:
					while (ႥႥႨႭ.Ⴀ.ႨႨ(pHwnd, stringBuilder, stringBuilder.Capacity) == 0)
					{
						if (false)
						{
							continue;
						}
						goto IL_0042;
					}
					goto IL_0048;
					IL_0048:
					if (browserHostMainWindowClassName.Equals(stringBuilder.ToString()))
					{
						if (false)
						{
							goto IL_001a;
						}
						do
						{
							childrenToKill.Add(pHwnd);
						}
						while (833 <= 833 - 792);
					}
					result = true;
					continue;
					IL_0042:
					result = true;
					break;
				}
				while (false);
				return result;
			}
		}

		private IntPtr Ⴀ;

		private Process Ⴀ;

		private Size Ⴀ;

		private bool Ⴍ;

		private bool Ⴗ;

		public static string ExeName => ႰႤႷ.Ⴍ.ႥႳႳ(1514635511);

		public bool IsVisible => Ⴍ;

		public unsafe BrowserHostController(IntPtr parent, string url, int left, int top, int width, int height)
		{
			*(IntPtr*)(&this.Ⴀ) = IntPtr.Zero;
			Ⴀ = default(Size);
			base..ctor();
			try
			{
				ႥႥႨ.Ⴗ.ႨႷႣ(ႰႤႷ.Ⴍ.ႥႳႳ(1514635514));
				Thread.Sleep(500);
				*(Process*)(&this.Ⴀ) = ႥႥႨႼ.Ⴅ.Ⴓ(ႼႳ(), url, Ⴈ: false, Ⴍ: false, Ⴅ: true);
				for (int i = 0; i < 100; i++)
				{
					if (ႥႥႨႣ.Ⴀ.Ⴈ.WaitOne(100))
					{
						return;
					}
					*(IntPtr*)(&this.Ⴀ) = GetValidBrowserHostWindow(((Process*)(&this.Ⴀ))->Id);
					if (!(*(IntPtr*)(&this.Ⴀ) == IntPtr.Zero))
					{
						break;
					}
				}
				if (*(IntPtr*)(&this.Ⴀ) == IntPtr.Zero)
				{
					throw new ApplicationException(ႰႤႷ.Ⴍ.ႥႳႳ(1514635515));
				}
				ႥႥႨႭ.Ⴀ.Ⴃ(*(IntPtr*)(&this.Ⴀ), -8, parent);
				Ⴀ = new Size(width, height);
				SetRightWindowPosition(new Point(left, top), simpleMove: false);
				Show();
			}
			catch (Exception ⴍ)
			{
				ႥႥႨ.Ⴗ.ႨႷႭ(ⴍ);
			}
		}

		private static string ႼႳ()
		{
			return ႣႳ.ႨႠႰ(ExeName);
		}

		public static Process GetProcess(int processId)
		{
			try
			{
				return Process.GetProcessById(processId);
			}
			catch (Exception ⴍ)
			{
				ႥႥႨ.Ⴗ.ႨႷႭ(ⴍ);
				return null;
			}
		}

		public static IntPtr GetValidBrowserHostWindow(int expectedProcessId)
		{
			IntPtr intPtr = IntPtr.Zero;
			try
			{
				do
				{
					intPtr = ႥႥႨႭ.Ⴀ.ႳႣ(ႭႭႰ.Ⴓ.Ⴅ, null);
					if (intPtr == IntPtr.Zero)
					{
						return IntPtr.Zero;
					}
					Process process = GetProcess((int)ႥႥႳႰ.Ⴅ.ႳႣႭ(intPtr));
					if (process == null)
					{
						return IntPtr.Zero;
					}
					if (expectedProcessId == process.Id)
					{
						break;
					}
					ႥႥႨ.Ⴗ.ႳႭ(ႰႭႭ.Ⴅ.ႤႥႥ(1514635505), process.Id);
					process.Kill();
				}
				while (!ႥႥႨႣ.Ⴀ.Ⴐ);
			}
			catch (Exception ⴍ)
			{
				ႥႥႨ.Ⴗ.ႨႷႭ(ⴍ);
			}
			return intPtr;
		}

		public unsafe void Show()
		{
			//Discarded unreachable code: IL_0002, IL_0042, IL_0060
			if (*(Process*)(&this.Ⴀ) != null)
			{
				if ((835 + 835 * 835) % 2 == 0)
				{
					ႥႥႨႭ.Ⴀ.ႷႥ(*(IntPtr*)(&this.Ⴀ), 5);
				}
				ႥႥႨႭ.Ⴀ.ႷႥ(*(IntPtr*)(&this.Ⴀ), 9);
				do
				{
					ႥႥႨႭ.Ⴀ.ႨႠႳ(*(IntPtr*)(&this.Ⴀ));
					Ⴍ = true;
				}
				while (877 <= 877 - 272);
			}
		}

		public unsafe void Hide(bool leaveUrl)
		{
			if (*(Process*)(&this.Ⴀ) == null)
			{
				return;
			}
			if (!leaveUrl)
			{
				ႠႳႳ(ႰႭႭ.Ⴅ.ႤႥႥ(1514635510));
			}
			ႥႥႨႭ.Ⴀ.ႷႥ(*(IntPtr*)(&this.Ⴀ), 0);
			if (!leaveUrl)
			{
				IntPtr intPtr = ႥႥႳႰ.Ⴅ.ႨႳႼ();
				StringBuilder stringBuilder = new StringBuilder(256);
				if (ႥႥႨႭ.Ⴀ.ႨႨ(*(IntPtr*)(&this.Ⴀ), stringBuilder, stringBuilder.Capacity) != 0)
				{
					<>c__DisplayClass1 CS$<>8__locals0 = new <>c__DisplayClass1();
					CS$<>8__locals0.<>4__this = this;
					CS$<>8__locals0.browserHostMainWindowClassName = stringBuilder.ToString();
					CS$<>8__locals0.childrenToKill = new List<IntPtr>();
					ႥႥႨႭ.Ⴀ.ႨႰ(IntPtr.Zero, delegate(IntPtr pHwnd, IntPtr parameter)
					{
						//Discarded unreachable code: IL_0005, IL_000b, IL_0040, IL_0046, IL_006f, IL_008d, IL_00bc, IL_00d2
						StringBuilder stringBuilder2 = default(StringBuilder);
						bool result;
						do
						{
							if (!(*(IntPtr*)(&CS$<>8__locals0.<>4__this.Ⴀ) == pHwnd))
							{
								stringBuilder2 = new StringBuilder(256);
								goto IL_001a;
							}
							if ((655 + 655 * 655) % 2 == 0)
							{
								result = true;
								break;
							}
							goto IL_0048;
							IL_001a:
							while (ႥႥႨႭ.Ⴀ.ႨႨ(pHwnd, stringBuilder2, stringBuilder2.Capacity) == 0)
							{
								if (false)
								{
									continue;
								}
								goto IL_0042;
							}
							goto IL_0048;
							IL_0048:
							if (CS$<>8__locals0.browserHostMainWindowClassName.Equals(stringBuilder2.ToString()))
							{
								if (false)
								{
									goto IL_001a;
								}
								do
								{
									CS$<>8__locals0.childrenToKill.Add(pHwnd);
								}
								while (833 <= 833 - 792);
							}
							result = true;
							continue;
							IL_0042:
							result = true;
							break;
						}
						while (false);
						return result;
					}, IntPtr.Zero);
					foreach (IntPtr item in CS$<>8__locals0.childrenToKill)
					{
						ႥႥႨႭ.Ⴀ.Ⴗ(item, 16, IntPtr.Zero, IntPtr.Zero);
					}
				}
			}
			Ⴍ = false;
		}

		public void SetRightWindowPosition(Point newPoint, bool simpleMove)
		{
			ႠႳ(new Rectangle(newPoint, Ⴀ), simpleMove);
		}

		private unsafe void ႠႳ(Rectangle Ⴍ, bool Ⴓ)
		{
			//Discarded unreachable code: IL_0005, IL_0042, IL_0080, IL_01aa, IL_01cc, IL_01ed
			bool flag = *(Process*)(&this.Ⴀ) == null;
			while (true)
			{
				if (!flag)
				{
					if (854 <= 854 - 83)
					{
						return;
					}
					ႥႥႨ.Ⴗ.ႳႥ(ႰႭႭ.Ⴅ.ႤႥႥ(1514635511), Ⴍ);
					flag = !Ⴓ;
					if (flag)
					{
						break;
					}
					if (false)
					{
						continue;
					}
					ႥႥႨႭ.Ⴀ.Ⴗ(*(IntPtr*)(&this.Ⴀ), Ⴍ.X, Ⴍ.Y, Ⴍ.Width, Ⴍ.Height, Ⴅ: false);
					ႥႥႨႭ.Ⴀ.ႷႥ(*(IntPtr*)(&this.Ⴀ), 15);
					return;
				}
				ႥႥႨ.Ⴗ.ႨႷႣ(ႰႭႭ.Ⴅ.ႤႥႥ(1514635508));
				if (40 > 40 - 10)
				{
					return;
				}
				break;
			}
			ႥႥႨႭ.Ⴀ.ႷႥ(*(IntPtr*)(&this.Ⴀ), 9);
			ႥႥႨႭ.Ⴀ.ႷႥ(*(IntPtr*)(&this.Ⴀ), 5);
			ႥႥႨႭ.Ⴀ.Ⴗ(*(IntPtr*)(&this.Ⴀ), Ⴍ.X, Ⴍ.Y, Ⴍ.Width, Ⴍ.Height, Ⴅ: false);
			ႥႥႨႭ.Ⴀ.ႭႨ Ⴓ2 = default(ႥႥႨႭ.Ⴀ.ႭႨ);
			*(int*)(&Ⴓ2.Ⴐ) = Marshal.SizeOf(Ⴓ2);
			ႥႥႨႭ.Ⴀ.ႷႳ(*(IntPtr*)(&this.Ⴀ), out Ⴓ2);
			Ⴓ2.Ⴐ.Ⴅ = Ⴍ.X;
			Ⴓ2.Ⴐ.Ⴈ = Ⴍ.Y;
			Ⴓ2.Ⴐ.Ⴄ = Ⴍ.Y + Ⴍ.Height;
			Ⴓ2.Ⴐ.Ⴀ = Ⴍ.X + Ⴍ.Width;
			Ⴓ2.Ⴈ.X = Ⴍ.X;
			Ⴓ2.Ⴈ.Y = Ⴍ.Y;
			ႥႥႨ.Ⴗ.ႳႥ(ႰႤႷ.Ⴍ.ႥႳႳ(1514635508), Ⴓ2.ToString());
			ႥႥႨႭ.Ⴀ.ႷႷ(*(IntPtr*)(&this.Ⴀ), ref Ⴓ2);
		}

		public unsafe void SendCommand(BrowserCommand command)
		{
			ႥႥႨႭ.Ⴀ.Ⴗ(*(IntPtr*)(&this.Ⴀ), (int)command, IntPtr.Zero, IntPtr.Zero);
		}

		public unsafe void Close()
		{
			int num = 0;
			while (true)
			{
				switch (num)
				{
				case 2:
					return;
				default:
					num = ((*(Process*)(&this.Ⴀ) != null) ? 1 : 2);
					break;
				case 1:
					((Process*)(&this.Ⴀ))->Kill();
					((Process*)(&this.Ⴀ))->Dispose();
					*(@null*)(&this.Ⴀ) = null;
					Ⴍ = false;
					num = 2;
					break;
				}
			}
		}

		private unsafe void ႠႳႳ(string Ⴍ)
		{
			ႥႥႨႭ.Ⴀ.ႣႤ Ⴃ = default(ႥႥႨႭ.Ⴀ.ႣႤ);
			try
			{
				Ⴃ.Ⴅ = (Ⴍ.Length + 1) * 2;
				Ⴃ.Ⴈ = ႥႥႨႭ.Ⴀ.ႷႰ(64, Ⴃ.Ⴅ);
				Marshal.Copy(Ⴍ.ToCharArray(), 0, Ⴃ.Ⴈ, Ⴍ.Length);
				*(IntPtr*)(&Ⴃ.Ⴅ) = (IntPtr)1;
				ႥႥႨႭ.Ⴀ.Ⴍ(*(IntPtr*)(&this.Ⴀ), 74, 0, ref Ⴃ);
			}
			catch (Exception ⴍ)
			{
				ႥႥႨ.Ⴗ.ႨႷႼ(ⴍ);
			}
		}

		public void OpenUrl(string url)
		{
			//Discarded unreachable code: IL_0018, IL_001c, IL_0038
			if (string.IsNullOrEmpty(url))
			{
				if (425 > 425 - 65)
				{
					return;
				}
			}
			ႠႳႳ(url);
			Show();
			if (73 < 73 - 2)
			{
			}
		}

		public void Dispose()
		{
			Dispose(disposing: true);
			GC.SuppressFinalize(this);
		}

		protected void Dispose(bool disposing)
		{
			//Discarded unreachable code: IL_0002, IL_0014, IL_0028, IL_004c, IL_0061
			if (!Ⴗ)
			{
				if (107 >= 107 - 2)
				{
					goto IL_0016;
				}
				goto IL_002a;
			}
			goto IL_0063;
			IL_0063:
			Ⴗ = true;
			return;
			IL_002a:
			ႥႥႨ.Ⴗ.ႨႷႤ(ႰႤႷ.Ⴍ.ႥႳႳ(1514635509));
			goto IL_0039;
			IL_0039:
			Close();
			if (607 >= 607 - 122)
			{
				goto IL_0004;
			}
			goto IL_0063;
			IL_0004:
			if (485 <= 485 - 401)
			{
				goto IL_0016;
			}
			goto IL_0063;
			IL_0016:
			if (!disposing)
			{
				goto IL_0004;
			}
			if (36 >= 36 - 15)
			{
				goto IL_002a;
			}
			goto IL_0039;
		}
	}
}
namespace Rondyo.Chatman.GUI.Infrastructure.WebKit
{
	public sealed class WebKitWindowBridge
	{
		[UnmanagedFunctionPointer(CallingConvention.Cdecl, CharSet = CharSet.Unicode)]
		public delegate void CallBackStringResult3(string id, string command, string args);

		public delegate void StringResult3Delegate(string controlId, string command, string value);

		private StringResult3Delegate Ⴀ;

		private readonly CallBackStringResult3 Ⴀ;

		private readonly int Ⴀ;

		private static readonly Dictionary<int, WebKitWindowBridge> Ⴀ = new Dictionary<int, WebKitWindowBridge>();

		private unsafe WebKitWindowBridge(int Ⴍ)
		{
			*(int*)(&this.Ⴀ) = Ⴍ;
			this.Ⴀ = (Dictionary<int, WebKitWindowBridge>)(object)new CallBackStringResult3(Ⴃ);
			ႰႷ(Ⴍ, (CallBackStringResult3)(object)this.Ⴀ);
		}

		public static void SetExecuteControlCommandDelegate(int webkitHandle, StringResult3Delegate executeControlCommandDelegate)
		{
			//Discarded unreachable code: IL_0005, IL_003a, IL_007f, IL_00a5
			if (!Ⴀ.ContainsKey(webkitHandle))
			{
				ႥႥႨ.Ⴗ.ႳႥ(ႰႭႭ.Ⴅ.ႤႥႥ(1514635503), webkitHandle);
				if (501 > 501 - 283)
				{
				}
			}
			else if ((775 + 775 * 775) % 2 == 0)
			{
				ႥႥႨ.Ⴗ.ႳႥ(ႰႭႭ.Ⴅ.ႤႥႥ(1514635502), webkitHandle);
				WebKitWindowBridge webKitWindowBridge = Ⴀ[webkitHandle];
				webKitWindowBridge.Ⴀ = (Dictionary<int, WebKitWindowBridge>)(object)(StringResult3Delegate)Delegate.Combine((Delegate)(object)webKitWindowBridge.Ⴀ, executeControlCommandDelegate);
			}
		}

		public static void ClearExecuteControlCommandDelegate(int webkitHandle, StringResult3Delegate executeControlCommandDelegate)
		{
			int num = 3;
			while (true)
			{
				switch (num)
				{
				case 0:
					return;
				default:
					num = ((!Ⴀ.ContainsKey(webkitHandle)) ? 1 : 2);
					break;
				case 2:
				{
					ႥႥႨ.Ⴗ.ႳႥ(ႰႤႷ.Ⴍ.ႥႳႳ(1514635497), webkitHandle);
					WebKitWindowBridge webKitWindowBridge = Ⴀ[webkitHandle];
					webKitWindowBridge.Ⴀ = (Dictionary<int, WebKitWindowBridge>)(object)(StringResult3Delegate)Delegate.Remove((Delegate)(object)webKitWindowBridge.Ⴀ, executeControlCommandDelegate);
					num = 0;
					break;
				}
				case 1:
					ႥႥႨ.Ⴗ.ႳႥ(ႰႤႷ.Ⴍ.ႥႳႳ(1514635502), webkitHandle);
					num = 0;
					break;
				}
			}
		}

		[DllImport("WebKitBridgeControl.dll", CharSet = CharSet.Unicode, EntryPoint = "attachWebKit")]
		private static extern int Ⴈ(IntPtr Ⴍ, int Ⴓ, int Ⴈ, int Ⴃ, int Ⴗ);

		[DllImport("WebKitBridgeControl.dll", CharSet = CharSet.Unicode, EntryPoint = "gotoURL")]
		private static extern void ႰႨ(int Ⴍ, string Ⴓ);

		[DllImport("WebKitBridgeControl.dll", CharSet = CharSet.Unicode, EntryPoint = "executeJavaScript")]
		private static extern void ႰႰ(int Ⴍ, string Ⴓ);

		[DllImport("WebKitBridgeControl.dll", CharSet = CharSet.Unicode, EntryPoint = "setExecuteControlCommandCallback")]
		private static extern void ႰႷ(int Ⴍ, CallBackStringResult3 Ⴓ);

		public static int InitializeOnWindows(Control host)
		{
			ႥႥႨ.Ⴗ.ႳႥ(ႰႤႷ.Ⴍ.ႥႳႳ(1514635503), host, host.Handle, host.Width);
			try
			{
				int num = Ⴈ(host.Handle, 0, 0, host.Width, host.Height);
				Ⴀ.Add(num, new WebKitWindowBridge(num));
				return num;
			}
			catch (Exception ⴍ)
			{
				ႥႥႨ.Ⴗ.ႨႷႼ(ⴍ);
			}
			return -1;
		}

		public static void DeInitializeWindows(int webkitHandle)
		{
			int num = 3;
			while (true)
			{
				switch (num)
				{
				case 0:
					return;
				default:
					num = ((webkitHandle >= 0) ? 1 : 2);
					break;
				case 2:
					num = 0;
					break;
				case 1:
					ႰႷ(webkitHandle, null);
					Ⴀ.Remove(webkitHandle);
					num = 0;
					break;
				}
			}
		}

		public static void GotoURL(int webkitHandle, string url)
		{
			try
			{
				if (!Ⴀ.ContainsKey(webkitHandle))
				{
					throw new ApplicationException(ႰႭႭ.Ⴅ.ႤႥႥ(1514635500) + webkitHandle + ႰႤႷ.Ⴍ.ႥႳႳ(1514635500));
				}
				ႰႨ(webkitHandle, url);
			}
			catch (Exception ⴍ)
			{
				ႥႥႨ.Ⴗ.ႨႷႼ(ⴍ);
			}
		}

		public static void ExecuteJavaScript(int webkitHandle, string script)
		{
			try
			{
				if (!Ⴀ.ContainsKey(webkitHandle))
				{
					throw new ApplicationException(ႰႤႷ.Ⴍ.ႥႳႳ(1514635501) + webkitHandle + ႰႭႭ.Ⴅ.ႤႥႥ(1514635506));
				}
				ႰႰ(webkitHandle, script);
			}
			catch (Exception ⴍ)
			{
				ႥႥႨ.Ⴗ.ႨႷႭ(ⴍ);
			}
		}

		private unsafe void Ⴃ(string Ⴍ, string Ⴓ, string Ⴈ)
		{
			try
			{
				ႥႥႨ.Ⴗ.ႳႥ(ႰႭႭ.Ⴅ.ႤႥႥ(1514635501), Ⴍ, Ⴓ, Ⴈ, *(int*)(&this.Ⴀ));
				if (this.Ⴀ != null)
				{
					this.Ⴀ(Ⴍ, Ⴓ, Ⴈ);
				}
				else
				{
					ႥႥႨ.Ⴗ.ႳႥ(ႰႤႷ.Ⴍ.ႥႳႳ(1514635506), Ⴓ);
				}
			}
			catch (Exception ⴍ)
			{
				ႥႥႨ.Ⴗ.ႨႷႼ(ⴍ);
			}
		}
	}
}
namespace Rondyo.Chatman.GUI.Infrastructure
{
	public class WebKitOnWindows : WebKitWindowBase
	{
		private sealed class <>c__DisplayClass11
		{
			public ႥႥႨႥ.Ⴗ result;

			public WebKitOnWindows <>4__this;

			public unsafe void <GetWindowPos>b__10()
			{
				result.Ⴐ = ((HideableForm*)(&<>4__this.Ⴈ))->Left;
				result.Ⴈ = ((HideableForm*)(&<>4__this.Ⴈ))->Top;
			}
		}

		private sealed class <>c__DisplayClass14
		{
			public WebKitOnWindows <>4__this;

			public string target;

			public void <NavigateTo>b__13()
			{
				WebKitWindowBridge.GotoURL(<>4__this.WebkitHandle, target);
			}
		}

		private sealed class <>c__DisplayClass3
		{
			public WebKitOnWindows <>4__this;

			public string script;

			public void <ExecuteJS>b__2()
			{
				WebKitWindowBridge.ExecuteJavaScript(<>4__this.WebkitHandle, script);
			}
		}

		private sealed class <>c__DisplayClass8
		{
			public WebKitOnWindows <>4__this;

			public int opacity;

			public unsafe void <ShowWindow>b__7()
			{
				int num = 1;
				while (true)
				{
					int num2;
					switch (num)
					{
					default:
						num = ((opacity <= 0) ? 4 : 0);
						break;
					case 0:
						num2 = (((HideableForm*)(&<>4__this.Ⴈ))->Visible ? 1 : 0);
						goto IL_003f;
					case 4:
						num2 = 1;
						goto IL_003f;
					case 3:
						((HideableForm*)(&<>4__this.Ⴈ))->ႷႭႭ(<>4__this.Ⴈ.Ⴐ);
						num = 2;
						break;
					case 2:
						{
							((HideableForm*)(&<>4__this.Ⴈ))->Opacity = opacity;
							((HideableForm*)(&<>4__this.Ⴈ))->WindowState = FormWindowState.Normal;
							((HideableForm*)(&<>4__this.Ⴈ))->Show();
							return;
						}
						IL_003f:
						num = ((num2 != 0) ? 2 : 3);
						break;
					}
				}
			}
		}

		private sealed class <>c__DisplayClassd
		{
			public WebKitOnWindows <>4__this;

			public ႥႥႨႥ.Ⴗ newPosition;

			public unsafe void <SetWindowPos>b__c()
			{
				((HideableForm*)(&<>4__this.Ⴈ))->Top = newPosition.Ⴈ;
				((HideableForm*)(&<>4__this.Ⴈ))->Left = newPosition.Ⴐ;
			}
		}

		private HideableForm Ⴈ;

		private Panel Ⴈ;

		private ႷႭႥ.Ⴀ Ⴈ;

		public unsafe override IntPtr WindowHandle => ((HideableForm*)(&this.Ⴈ))->Handle;

		public unsafe override void ConstructWindow(ႷႭႥ.Ⴀ webKitWindowParameters)
		{
			Ⴈ = webKitWindowParameters;
			*(HideableForm*)(&this.Ⴈ) = new HideableForm(webKitWindowParameters.Ⴐ && !webKitWindowParameters.Ⴈ);
			((HideableForm*)(&this.Ⴈ))->FormBorderStyle = FormBorderStyle.None;
			((HideableForm*)(&this.Ⴈ))->Opacity = 0.0;
			try
			{
				using (Stream stream = ႥႥႥ.Ⴗ.ႳႷ(ႰႭႭ.Ⴅ.ႤႥႥ(1514635484), ႰႤႷ.Ⴍ.ႥႳႳ(1514635430)))
				{
					((HideableForm*)(&this.Ⴈ))->Icon = new Icon(stream);
				}
			}
			catch (Exception ⴍ)
			{
				ႥႥႨ.Ⴗ.ႨႷႭ(ⴍ);
			}
			*(Panel*)(&this.Ⴈ) = new Panel();
			switch (webKitWindowParameters.Ⴄ)
			{
			case ႷႭႨ.Ⴍ.Ⴈ:
			{
				((HideableForm*)(&this.Ⴈ))->StartPosition = FormStartPosition.Manual;
				Size primaryMonitorMaximizedWindowSize = SystemInformation.PrimaryMonitorMaximizedWindowSize;
				((HideableForm*)(&this.Ⴈ))->Top = Math.Max(0, primaryMonitorMaximizedWindowSize.Height / 2 - ((Size*)(&webKitWindowParameters.Ⴐ))->Height / 2);
				((HideableForm*)(&this.Ⴈ))->Left = Math.Max(0, primaryMonitorMaximizedWindowSize.Width / 2 - ((Size*)(&webKitWindowParameters.Ⴐ))->Width / 2);
				break;
			}
			case ႷႭႨ.Ⴍ.Ⴅ:
				((HideableForm*)(&this.Ⴈ))->StartPosition = FormStartPosition.Manual;
				((HideableForm*)(&this.Ⴈ))->Top = Screen.PrimaryScreen.WorkingArea.Height - ((Size*)(&webKitWindowParameters.Ⴐ))->Height;
				((HideableForm*)(&this.Ⴈ))->Left = Screen.PrimaryScreen.WorkingArea.Width - ((Size*)(&webKitWindowParameters.Ⴐ))->Width;
				break;
			default:
				throw new ArgumentOutOfRangeException();
			}
			((HideableForm*)(&this.Ⴈ))->AutoScroll = false;
			((HideableForm*)(&this.Ⴈ))->AutoSize = false;
			((HideableForm*)(&this.Ⴈ))->SuspendLayout();
			((Panel*)(&this.Ⴈ))->Dock = DockStyle.Fill;
			((Panel*)(&this.Ⴈ))->Location = new Point(0, 0);
			((Panel*)(&this.Ⴈ))->Name = ႰႤႷ.Ⴍ.ႥႳႳ(1514635431);
			((Panel*)(&this.Ⴈ))->TabIndex = 0;
			((Panel*)(&this.Ⴈ))->AutoScroll = false;
			((Panel*)(&this.Ⴈ))->AutoSize = false;
			((HideableForm*)(&this.Ⴈ))->AutoScaleDimensions = new SizeF(8f, 16f);
			((HideableForm*)(&this.Ⴈ))->AutoScaleMode = AutoScaleMode.Font;
			((HideableForm*)(&this.Ⴈ))->ClientSize = *(Size*)(&webKitWindowParameters.Ⴐ);
			((HideableForm*)(&this.Ⴈ))->TopMost = webKitWindowParameters.Ⴓ;
			((HideableForm*)(&this.Ⴈ))->Controls.Add(*(Panel*)(&this.Ⴈ));
			((HideableForm*)(&this.Ⴈ))->Name = ႰႭႭ.Ⴅ.ႤႥႥ(1514635426);
			((HideableForm*)(&this.Ⴈ))->Text = *(string*)(&webKitWindowParameters.Ⴐ);
			((HideableForm*)(&this.Ⴈ))->Load += ႠႳ;
			((HideableForm*)(&this.Ⴈ))->GotFocus += delegate
			{
				ႭႨ();
			};
			((HideableForm*)(&this.Ⴈ))->Closed += ႠႨ;
			((HideableForm*)(&this.Ⴈ))->Closing += ႠႠ;
			((HideableForm*)(&this.Ⴈ))->BackColor = Color.Red;
			((HideableForm*)(&this.Ⴈ))->ResumeLayout(performLayout: false);
			((HideableForm*)(&this.Ⴈ))->Size = *(Size*)(&webKitWindowParameters.Ⴐ);
			((HideableForm*)(&this.Ⴈ))->PerformLayout();
		}

		[DllImport("user32.dll", SetLastError = true)]
		public static extern IntPtr FindWindowEx(IntPtr parentHandle, IntPtr childAfter, string className, IntPtr windowTitle);

		[DllImport("user32.dll", EntryPoint = "SetFocus")]
		private static extern IntPtr ႰႨႷ(IntPtr Ⴃ);

		private unsafe void ႭႨ()
		{
			int num = 1;
			while (true)
			{
				switch (num)
				{
				case 2:
					return;
				default:
				{
					IntPtr ⴃ = FindWindowEx(((Panel*)(&this.Ⴈ))->Handle, IntPtr.Zero, ႰႭႭ.Ⴅ.ႤႥႥ(1514635485), IntPtr.Zero);
					ႰႨႷ(ⴃ);
					num = ((WebkitHandle < 0) ? 2 : 0);
					break;
				}
				case 0:
					ExecuteJS(ႰႤႷ.Ⴍ.ႥႳႳ(1514635428));
					num = 2;
					break;
				}
			}
		}

		private unsafe void ႠႳ(object Ⴃ, EventArgs Ⴀ)
		{
			base.CurrentWebKitState = WebKitState.RunningAltF4Close;
			ႥႥႨႣ.Ⴀ.ႨႠႠ(delegate
			{
				WebkitHandle = WebKitWindowBridge.InitializeOnWindows(*(Panel*)(&this.Ⴈ));
				WebKitWindowBridge.SetExecuteControlCommandDelegate(WebkitHandle, Ⴍ);
			});
		}

		private void Ⴍ(string Ⴃ, string Ⴀ, string Ⴄ)
		{
			//Discarded unreachable code: IL_0002, IL_001d, IL_003b
			do
			{
				bool flag = base.CurrentWebKitState == WebKitState.ShuttingDown;
				do
				{
					if (flag)
					{
						return;
					}
				}
				while (false);
				RaiseControlCommandEvent(Ⴃ, Ⴀ, Ⴄ);
			}
			while (669 <= 669 - 182);
		}

		public override void ExecuteJS(string script)
		{
			//Discarded unreachable code: IL_0005, IL_002e, IL_008d, IL_00c5
			while (true)
			{
				<>c__DisplayClass3 CS$<>8__locals0 = new <>c__DisplayClass3();
				CS$<>8__locals0.script = script;
				while (true)
				{
					CS$<>8__locals0.<>4__this = this;
					if (WebkitHandle >= 0)
					{
						break;
					}
					if ((72 + 72 * 72) % 2 == 0)
					{
						throw new ApplicationException(ႰႤႷ.Ⴍ.ႥႳႳ(1514635429));
					}
				}
				ႥႥႨ.Ⴗ.ႳႥ(ႰႭႭ.Ⴅ.ႤႥႥ(1514635427), CS$<>8__locals0.script, WebkitHandle);
				bool flag = base.CurrentWebKitState == WebKitState.ShuttingDown;
				while (true)
				{
					if (!flag)
					{
						if (false)
						{
							continue;
						}
						ႥႥႨႣ.Ⴀ.ႨႠႠ(delegate
						{
							WebKitWindowBridge.ExecuteJavaScript(CS$<>8__locals0.<>4__this.WebkitHandle, CS$<>8__locals0.script);
						});
						if (690 <= 690 - 308)
						{
							break;
						}
					}
					ႥႥႨ.Ⴗ.ႳႥ(ႰႤႷ.Ⴍ.ႥႳႳ(1514635434), WebkitHandle);
					return;
				}
			}
		}

		private void ႠႠ(object Ⴃ, CancelEventArgs Ⴀ)
		{
			//Discarded unreachable code: IL_0002, IL_001a, IL_0024, IL_0032, IL_0042, IL_0047, IL_006a
			while (true)
			{
				Ⴀ.Cancel = (base.CurrentWebKitState != WebKitState.RunningAltF4Close && base.CurrentWebKitState != WebKitState.ShuttingDown);
				if (Ⴀ.Cancel)
				{
					break;
				}
				RaiseClosingEvent();
				if (661 >= 661 - 465)
				{
					return;
				}
			}
			if (false)
			{
			}
			HideWindow();
		}

		private void ႠႨ(object Ⴃ, EventArgs Ⴀ)
		{
			RaiseClosedEvent();
		}

		public unsafe override void CloseWindow()
		{
			ႥႥႨႣ.Ⴀ.ႨႠႠ(delegate
			{
				((HideableForm*)(&this.Ⴈ))->Close();
			});
		}

		public override void ShutDown()
		{
			//Discarded unreachable code: IL_0005, IL_0077, IL_007b, IL_009d
			bool flag = base.CurrentWebKitState != WebKitState.ShuttingDown;
			while (!flag)
			{
				if (613 > 613 - 59)
				{
					return;
				}
			}
			base.CurrentWebKitState = WebKitState.ShuttingDown;
			RaiseControlCommandEvent(ႰႭႭ.Ⴅ.ႤႥႥ(1514635424), ႰႤႷ.Ⴍ.ႥႳႳ(1514635424), ႰႭႭ.Ⴅ.ႤႥႥ(1514635498));
			WebKitWindowBridge.ClearExecuteControlCommandDelegate(WebkitHandle, Ⴍ);
			CloseWindow();
			WebKitWindowBridge.DeInitializeWindows(WebkitHandle);
			do
			{
				base.CurrentWebKitState = WebKitState.Shuttedown;
				WebkitHandle = -1;
			}
			while (false);
		}

		public unsafe override void HideWindow()
		{
			base.HideWindow();
			ႥႥႨႣ.Ⴀ.ႨႠႠ(delegate
			{
				((HideableForm*)(&this.Ⴈ))->Hide();
			});
		}

		public unsafe override void ShowWindow(int opacity)
		{
			<>c__DisplayClass8 CS$<>8__locals0 = new <>c__DisplayClass8();
			CS$<>8__locals0.opacity = opacity;
			CS$<>8__locals0.<>4__this = this;
			base.ShowWindow(CS$<>8__locals0.opacity);
			ႥႥႨႣ.Ⴀ.ႨႠႠ(delegate
			{
				int num = 1;
				while (true)
				{
					int num2;
					switch (num)
					{
					default:
						num = ((CS$<>8__locals0.opacity <= 0) ? 4 : 0);
						break;
					case 0:
						num2 = (((HideableForm*)(&CS$<>8__locals0.<>4__this.Ⴈ))->Visible ? 1 : 0);
						goto IL_003f;
					case 4:
						num2 = 1;
						goto IL_003f;
					case 3:
						((HideableForm*)(&CS$<>8__locals0.<>4__this.Ⴈ))->ႷႭႭ(CS$<>8__locals0.<>4__this.Ⴈ.Ⴐ);
						num = 2;
						break;
					case 2:
						{
							((HideableForm*)(&CS$<>8__locals0.<>4__this.Ⴈ))->Opacity = CS$<>8__locals0.opacity;
							((HideableForm*)(&CS$<>8__locals0.<>4__this.Ⴈ))->WindowState = FormWindowState.Normal;
							((HideableForm*)(&CS$<>8__locals0.<>4__this.Ⴈ))->Show();
							return;
						}
						IL_003f:
						num = ((num2 != 0) ? 2 : 3);
						break;
					}
				}
			});
			BringToTop();
		}

		public unsafe override void BringToTop()
		{
			ႥႥႨႣ.Ⴀ.ႨႠႠ(delegate
			{
				((HideableForm*)(&this.Ⴈ))->TopMost = true;
				((HideableForm*)(&this.Ⴈ))->BringToFront();
				((HideableForm*)(&this.Ⴈ))->TopMost = Ⴈ.Ⴓ;
			});
		}

		public unsafe override void Minimize()
		{
			ႥႥႨႣ.Ⴀ.ႨႠႠ(delegate
			{
				((HideableForm*)(&this.Ⴈ))->WindowState = FormWindowState.Minimized;
			});
		}

		public override void Resize(int x, int y, int with, int height)
		{
		}

		public unsafe override void SetWindowPos(ႥႥႨႥ.Ⴗ newPosition)
		{
			<>c__DisplayClassd CS$<>8__locals0 = new <>c__DisplayClassd();
			CS$<>8__locals0.newPosition = newPosition;
			CS$<>8__locals0.<>4__this = this;
			ႥႥႨ.Ⴗ.ႳႥ(ႰႤႷ.Ⴍ.ႥႳႳ(1514635435), CS$<>8__locals0.newPosition);
			ႥႥႨႣ.Ⴀ.ႨႠႠ(delegate
			{
				((HideableForm*)(&CS$<>8__locals0.<>4__this.Ⴈ))->Top = CS$<>8__locals0.newPosition.Ⴈ;
				((HideableForm*)(&CS$<>8__locals0.<>4__this.Ⴈ))->Left = CS$<>8__locals0.newPosition.Ⴐ;
			});
		}

		public unsafe override ႥႥႨႥ.Ⴗ GetWindowPos()
		{
			<>c__DisplayClass11 CS$<>8__locals0 = new <>c__DisplayClass11();
			CS$<>8__locals0.<>4__this = this;
			CS$<>8__locals0.result = new ႥႥႨႥ.Ⴗ
			{
				Ⴐ = 0,
				Ⴈ = 0
			};
			ႥႥႨႣ.Ⴀ.ႨႠႠ(delegate
			{
				CS$<>8__locals0.result.Ⴐ = ((HideableForm*)(&CS$<>8__locals0.<>4__this.Ⴈ))->Left;
				CS$<>8__locals0.result.Ⴈ = ((HideableForm*)(&CS$<>8__locals0.<>4__this.Ⴈ))->Top;
			});
			ႥႥႨ.Ⴗ.ႳႥ(ႰႭႭ.Ⴅ.ႤႥႥ(1514635425), CS$<>8__locals0.result);
			return CS$<>8__locals0.result;
		}

		public override void NavigateTo(string target)
		{
			int num = 4;
			<>c__DisplayClass14 CS$<>8__locals0 = default(<>c__DisplayClass14);
			while (true)
			{
				switch (num)
				{
				case 2:
					return;
				default:
					CS$<>8__locals0 = new <>c__DisplayClass14();
					CS$<>8__locals0.target = target;
					CS$<>8__locals0.<>4__this = this;
					num = ((WebkitHandle < 0) ? 3 : 0);
					break;
				case 3:
					throw new ApplicationException(ႰႤႷ.Ⴍ.ႥႳႳ(1514635432));
				case 0:
					num = ((base.CurrentWebKitState != WebKitState.ShuttingDown) ? 1 : 2);
					break;
				case 1:
					ႥႥႨႣ.Ⴀ.ႨႠႠ(delegate
					{
						WebKitWindowBridge.GotoURL(CS$<>8__locals0.<>4__this.WebkitHandle, CS$<>8__locals0.target);
					});
					num = 2;
					break;
				}
			}
		}

		private void <ConstructWindow>b__0(object P_0, EventArgs P_1)
		{
			ႭႨ();
		}

		private unsafe void <OnLoad>b__1()
		{
			WebkitHandle = WebKitWindowBridge.InitializeOnWindows(*(Panel*)(&this.Ⴈ));
			WebKitWindowBridge.SetExecuteControlCommandDelegate(WebkitHandle, Ⴍ);
		}

		private unsafe void <CloseWindow>b__5()
		{
			((HideableForm*)(&this.Ⴈ))->Close();
		}

		private unsafe void <HideWindow>b__6()
		{
			((HideableForm*)(&this.Ⴈ))->Hide();
		}

		private unsafe void <BringToTop>b__a()
		{
			((HideableForm*)(&this.Ⴈ))->TopMost = true;
			((HideableForm*)(&this.Ⴈ))->BringToFront();
			((HideableForm*)(&this.Ⴈ))->TopMost = Ⴈ.Ⴓ;
		}

		private unsafe void <Minimize>b__b()
		{
			((HideableForm*)(&this.Ⴈ))->WindowState = FormWindowState.Minimized;
		}
	}
	public enum WebKitState
	{
		NotStartted,
		RunningAltF4Hide,
		RunningAltF4Close,
		PreparingToShutDown,
		ShuttingDown,
		Shuttedown
	}
	public abstract class WebKitWindowBase : IWebKitWindow
	{
		protected int WebkitHandle = -1;

		private EventHandler Ⴐ;

		private EventHandler Ⴈ;

		private EventHandler Ⴓ;

		private EventHandler Ⴗ;

		private EventHandler Ⴅ;

		private PageCommandDelegate Ⴐ;

		private ControlCommandDelegate Ⴐ;

		private WebKitState Ⴐ;

		public WebKitState CurrentWebKitState
		{
			get
			{
				return Ⴐ;
			}
			set
			{
				Ⴐ = value;
			}
		}

		public abstract IntPtr WindowHandle
		{
			get;
		}

		public unsafe event EventHandler OnShowing
		{
			[MethodImpl(MethodImplOptions.Synchronized)]
			add
			{
				*(EventHandler*)(&this.Ⴐ) = (EventHandler)Delegate.Combine(*(EventHandler*)(&this.Ⴐ), value);
			}
			[MethodImpl(MethodImplOptions.Synchronized)]
			remove
			{
				*(EventHandler*)(&this.Ⴐ) = (EventHandler)Delegate.Remove(*(EventHandler*)(&this.Ⴐ), value);
			}
		}

		public event EventHandler OnHiding
		{
			[MethodImpl(MethodImplOptions.Synchronized)]
			add
			{
				Ⴈ = (EventHandler)Delegate.Combine(Ⴈ, value);
			}
			[MethodImpl(MethodImplOptions.Synchronized)]
			remove
			{
				Ⴈ = (EventHandler)Delegate.Remove(Ⴈ, value);
			}
		}

		public event EventHandler OnClosing
		{
			[MethodImpl(MethodImplOptions.Synchronized)]
			add
			{
				Ⴓ = (EventHandler)Delegate.Combine(Ⴓ, value);
			}
			[MethodImpl(MethodImplOptions.Synchronized)]
			remove
			{
				Ⴓ = (EventHandler)Delegate.Remove(Ⴓ, value);
			}
		}

		public event EventHandler OnClosed
		{
			[MethodImpl(MethodImplOptions.Synchronized)]
			add
			{
				Ⴗ = (EventHandler)Delegate.Combine(Ⴗ, value);
			}
			[MethodImpl(MethodImplOptions.Synchronized)]
			remove
			{
				Ⴗ = (EventHandler)Delegate.Remove(Ⴗ, value);
			}
		}

		public event EventHandler OnPageLoaded
		{
			[MethodImpl(MethodImplOptions.Synchronized)]
			add
			{
				Ⴅ = (EventHandler)Delegate.Combine(Ⴅ, value);
			}
			[MethodImpl(MethodImplOptions.Synchronized)]
			remove
			{
				Ⴅ = (EventHandler)Delegate.Remove(Ⴅ, value);
			}
		}

		public unsafe event PageCommandDelegate OnPageCommand
		{
			[MethodImpl(MethodImplOptions.Synchronized)]
			add
			{
				*(PageCommandDelegate*)(&this.Ⴐ) = (PageCommandDelegate)Delegate.Combine(*(PageCommandDelegate*)(&this.Ⴐ), value);
			}
			[MethodImpl(MethodImplOptions.Synchronized)]
			remove
			{
				*(PageCommandDelegate*)(&this.Ⴐ) = (PageCommandDelegate)Delegate.Remove(*(PageCommandDelegate*)(&this.Ⴐ), value);
			}
		}

		public unsafe event ControlCommandDelegate OnControlCommand
		{
			[MethodImpl(MethodImplOptions.Synchronized)]
			add
			{
				*(ControlCommandDelegate*)(&this.Ⴐ) = (ControlCommandDelegate)Delegate.Combine(*(ControlCommandDelegate*)(&this.Ⴐ), value);
			}
			[MethodImpl(MethodImplOptions.Synchronized)]
			remove
			{
				*(ControlCommandDelegate*)(&this.Ⴐ) = (ControlCommandDelegate)Delegate.Remove(*(ControlCommandDelegate*)(&this.Ⴐ), value);
			}
		}

		public abstract void ConstructWindow(ႷႭႥ.Ⴀ webKitWindowParameters);

		public abstract void CloseWindow();

		public unsafe virtual void ShowWindow(int opacity)
		{
			int num = 2;
			while (true)
			{
				switch (num)
				{
				case 0:
					return;
				default:
					ႥႥႨ.Ⴗ.ႨႷႣ(ႰႤႷ.Ⴍ.ႥႳႳ(1514635507));
					num = ((*(EventHandler*)(&this.Ⴐ) != null) ? 1 : 0);
					break;
				case 1:
					(*(EventHandler*)(&this.Ⴐ))(this, new EventArgs());
					num = 0;
					break;
				}
			}
		}

		public abstract void BringToTop();

		public abstract void Minimize();

		public abstract void Resize(int x, int y, int with, int height);

		public abstract void SetWindowPos(ႥႥႨႥ.Ⴗ newPosition);

		public abstract ႥႥႨႥ.Ⴗ GetWindowPos();

		public abstract void NavigateTo(string target);

		public abstract void ExecuteJS(string script);

		public void PrepareToShutDown()
		{
			try
			{
				ႥႥႨ.Ⴗ.ႨႷႣ(ႰႤႷ.Ⴍ.ႥႳႳ(1514635504));
				CurrentWebKitState = WebKitState.PreparingToShutDown;
				HideWindow();
			}
			catch (Exception ⴍ)
			{
				ႥႥႨ.Ⴗ.ႨႷႭ(ⴍ);
			}
		}

		public abstract void ShutDown();

		public virtual void HideWindow()
		{
			//Discarded unreachable code: IL_0002, IL_0025, IL_0043
			if (Ⴈ != null)
			{
				if ((798 + 798 * 798) % 2 == 0)
				{
					goto IL_0004;
				}
				goto IL_0015;
			}
			return;
			IL_0015:
			if (750 <= 750 - 412)
			{
				goto IL_0004;
			}
			return;
			IL_0004:
			Ⴈ(this, new EventArgs());
			goto IL_0015;
		}

		protected void RaiseClosingEvent()
		{
			try
			{
				if (Ⴓ != null)
				{
					ႥႥႨ.Ⴗ.ႨႷႣ(ႰႤႷ.Ⴍ.ႥႳႳ(1514635505));
					Ⴓ(this, new EventArgs());
				}
				else
				{
					ႥႥႨ.Ⴗ.ႨႷႣ(ႰႭႭ.Ⴅ.ႤႥႥ(1514635507));
				}
			}
			catch (Exception ⴍ)
			{
				ႥႥႨ.Ⴗ.ႨႷႭ(ⴍ);
			}
		}

		protected void RaiseClosedEvent()
		{
			try
			{
				if (Ⴗ != null)
				{
					ႥႥႨ.Ⴗ.ႨႷႣ(ႰႭႭ.Ⴅ.ႤႥႥ(1514635504));
					Ⴗ(this, new EventArgs());
				}
				else
				{
					ႥႥႨ.Ⴗ.ႨႷႣ(ႰႤႷ.Ⴍ.ႥႳႳ(1514635510));
				}
			}
			catch (Exception ⴍ)
			{
				ႥႥႨ.Ⴗ.ႨႷႭ(ⴍ);
			}
		}

		protected unsafe void RaiseControlCommandEvent(string id, string command, string argument)
		{
			try
			{
				if (*(ControlCommandDelegate*)(&this.Ⴐ) != null)
				{
					(*(ControlCommandDelegate*)(&this.Ⴐ))(id, command, argument);
				}
			}
			catch (Exception ⴍ)
			{
				ႥႥႨ.Ⴗ.ႨႷႭ(ⴍ);
			}
		}
	}
	public class WebKitWindowController<TopLevelControllerType> : IWebKitWindowController where TopLevelControllerType : class, IPageController, new()
	{
		private readonly TopLevelControllerType Ⴐ;

		private bool Ⴐ;

		private EventHandler Ⴐ;

		private IWebKitWindow Ⴐ;

		public IPageController TopPageController => (IPageController)this.Ⴐ;

		public IWebKitWindow WebKit
		{
			get
			{
				return Ⴐ;
			}
			private set
			{
				Ⴐ = value;
			}
		}

		public event EventHandler OnClosed
		{
			[MethodImpl(MethodImplOptions.Synchronized)]
			add
			{
				this.Ⴐ = (IWebKitWindow)(object)(EventHandler)Delegate.Combine((Delegate)this.Ⴐ, value);
			}
			[MethodImpl(MethodImplOptions.Synchronized)]
			remove
			{
				this.Ⴐ = (IWebKitWindow)(object)(EventHandler)Delegate.Remove((Delegate)this.Ⴐ, value);
			}
		}

		public WebKitWindowController()
		{
			ႥႥႨ.Ⴗ.ႨႷႣ(ႰႤႷ.Ⴍ.ႥႳႳ(1514635494));
			ႥႥႨ.Ⴗ.ႨႷႣ(ႰႭႭ.Ⴅ.ႤႥႥ(1514635488));
			WebKit = new WebKitOnWindows();
			ႥႥႨ.Ⴗ.ႨႷႣ(ႰႤႷ.Ⴍ.ႥႳႳ(1514635495));
			WebKit.OnClosed += ႥႷ;
			WebKit.OnClosing += ႥႷ;
			ႥႥႨ.Ⴗ.ႨႷႣ(ႰႭႭ.Ⴅ.ႤႥႥ(1514635489));
			this.Ⴐ = (IWebKitWindow)new TopLevelControllerType();
			ႥႥႨ.Ⴗ.ႨႷႣ(ႰႭႭ.Ⴅ.ႤႥႥ(1514635494));
		}

		private void ႥႷ(object Ⴍ, EventArgs Ⴓ)
		{
			int num = 0;
			while (true)
			{
				switch (num)
				{
				case 3:
					return;
				default:
					ႥႥႨ.Ⴗ.ႨႷႣ(ႰႭႭ.Ⴅ.ႤႥႥ(1514635490));
					num = ((this.Ⴐ != null) ? 1 : 2);
					break;
				case 1:
					ႥႥႨ.Ⴗ.ႨႷႣ(ႰႤႷ.Ⴍ.ႥႳႳ(1514635490));
					this.Ⴐ(Ⴍ, Ⴓ);
					num = 3;
					break;
				case 2:
					ႥႥႨ.Ⴗ.ႨႷႣ(ႰႭႭ.Ⴅ.ႤႥႥ(1514635491));
					num = 3;
					break;
				}
			}
		}

		public unsafe void CreateAndInitialize(ႷႭႥ.Ⴀ webKitWindowParameters)
		{
			ႥႥႨ.Ⴗ.ႳႥ(ႰႤႷ.Ⴍ.ႥႳႳ(1514635491), webKitWindowParameters);
			WebKit.ConstructWindow(webKitWindowParameters);
			WebKit.ShowWindow(0);
			*(bool*)(&this.Ⴐ) = webKitWindowParameters.Ⴈ;
			((IPageController)this.Ⴐ).OnPageFullyLoaded += ႥႠ;
			ႥႥႨ.Ⴗ.ႨႷႣ(ႰႤႷ.Ⴍ.ႥႳႳ(1514635488));
			TopLevelControllerType ⴐ = (TopLevelControllerType)this.Ⴐ;
			ⴐ.Initialize(WebKit, null, null);
			ႥႥႨ.Ⴗ.ႨႷႣ(ႰႤႷ.Ⴍ.ႥႳႳ(1514635489));
		}

		private unsafe void ႥႠ(string Ⴍ, IWebKitWindow Ⴓ)
		{
			ႥႥႨႥ.Ⴓ.ႨႷႼ(delegate
			{
				ႥႥႨႣ.Ⴀ.ႨႠႠ(delegate
				{
					//Discarded unreachable code: IL_0002, IL_001f, IL_0031, IL_0037, IL_003c, IL_005d
					do
					{
						WebKit.ShowWindow((!(*(bool*)(&this.Ⴐ))) ? 100 : 0);
						if (!(*(bool*)(&this.Ⴐ)))
						{
							break;
						}
						if (466 <= 466 - 41)
						{
							break;
						}
						WebKit.HideWindow();
					}
					while (520 < 520 - 518);
				});
				ႥႥႨႣ.Ⴀ.Ⴐ = ႥႥႨႣ.Ⴐ.Ⴄ;
			});
		}

		public void Close()
		{
			int num = 1;
			while (true)
			{
				switch (num)
				{
				default:
					num = ((this.Ⴐ != null) ? 2 : 0);
					break;
				case 2:
				{
					TopLevelControllerType ⴐ = (TopLevelControllerType)this.Ⴐ;
					ⴐ.DeInitialize();
					num = 0;
					break;
				}
				case 0:
					WebKit.ShutDown();
					return;
				}
			}
		}

		private unsafe void <OnTopPageFullyLoaded>b__0()
		{
			ႥႥႨႣ.Ⴀ.ႨႠႠ(delegate
			{
				//Discarded unreachable code: IL_0002, IL_001f, IL_0031, IL_0037, IL_003c, IL_005d
				do
				{
					WebKit.ShowWindow((!(*(bool*)(&this.Ⴐ))) ? 100 : 0);
					if (!(*(bool*)(&this.Ⴐ)))
					{
						break;
					}
					if (466 <= 466 - 41)
					{
						break;
					}
					WebKit.HideWindow();
				}
				while (520 < 520 - 518);
			});
			ႥႥႨႣ.Ⴀ.Ⴐ = ႥႥႨႣ.Ⴐ.Ⴄ;
		}

		private unsafe void <OnTopPageFullyLoaded>b__1()
		{
			//Discarded unreachable code: IL_0002, IL_001f, IL_0031, IL_0037, IL_003c, IL_005d
			do
			{
				WebKit.ShowWindow((!(*(bool*)(&this.Ⴐ))) ? 100 : 0);
				if (*(bool*)(&this.Ⴐ))
				{
					if (466 > 466 - 41)
					{
						WebKit.HideWindow();
						continue;
					}
					break;
				}
				break;
			}
			while (520 < 520 - 518);
		}
	}
}
namespace Rondyo.Chatman.GUI.Tray.Configuration
{
	[Serializable]
	public class TrayMenuItem
	{
		private int id;

		private string name;

		private string assemblyPath;

		private string objectName;

		[NonSerialized]
		private ႷႭႨ.Ⴅ trayMenuItemBuilderInstance;

		[XmlAttribute]
		public int ID
		{
			get
			{
				return id;
			}
			set
			{
				id = value;
			}
		}

		[XmlAttribute]
		public string Name
		{
			get
			{
				return name;
			}
			set
			{
				name = value;
			}
		}

		[XmlAttribute]
		public string AssemblyPath
		{
			get
			{
				return assemblyPath;
			}
			set
			{
				assemblyPath = value;
			}
		}

		[XmlAttribute]
		public string ObjectName
		{
			get
			{
				return objectName;
			}
			set
			{
				objectName = value;
			}
		}

		[XmlIgnore]
		public ႷႭႨ.Ⴅ TrayMenuItemBuilderInstance
		{
			get
			{
				return trayMenuItemBuilderInstance;
			}
			set
			{
				trayMenuItemBuilderInstance = value;
			}
		}
	}
	[Serializable]
	[XmlRoot("TrayMenuItemsList")]
	public class TrayMenuItemsList
	{
		private List<TrayMenuItem> trayMenuItems = new List<TrayMenuItem>();

		[NonSerialized]
		private bool trayMenuItemsSet = false;

		[XmlArray("TrayMenuItems")]
		[XmlArrayItem("TrayMenuItem", typeof(TrayMenuItem))]
		public List<TrayMenuItem> TrayMenuItems
		{
			get
			{
				return trayMenuItems;
			}
			set
			{
				//Discarded unreachable code: IL_0002, IL_0024
				if (trayMenuItemsSet)
				{
					if (167 >= 167 - 71)
					{
						throw new InvalidOperationException();
					}
				}
				trayMenuItems = value;
				trayMenuItemsSet = true;
			}
		}

		internal static TrayMenuItemsList ႨႷႰ()
		{
			return new TrayMenuItemsList();
		}
	}
}
namespace Rondyo.Chatman.GUI.Tray.MenuItems
{
	public class DefaultTrayMenuItemBuilder : ႷႭႨ.Ⴅ
	{
		private ToolStripMenuItem Ⴐ;

		private Bitmap Ⴐ = null;

		private Bitmap Ⴈ;

		private ToolStripMenuItem Ⴈ = null;

		public List<ToolStripItem> CreateMenuEntries()
		{
			int num = 3;
			List<ToolStripItem> list = default(List<ToolStripItem>);
			while (true)
			{
				switch (num)
				{
				case 1:
					ႭႨႰ.Ⴐ.Ⴀ += ႨႣႭ;
					num = 2;
					continue;
				case 0:
					ႨႷႷ();
					num = 2;
					continue;
				case 2:
				{
					list.Add(Ⴈ);
					list.Add(new ToolStripSeparator());
					ToolStripMenuItem toolStripMenuItem = new ToolStripMenuItem();
					toolStripMenuItem.Text = Resources.ExitMenuItemText;
					toolStripMenuItem.Click += ႳႭ;
					list.Add(toolStripMenuItem);
					return list;
				}
				}
				list = new List<ToolStripItem>();
				ToolStripMenuItem toolStripMenuItem2 = new ToolStripMenuItem();
				toolStripMenuItem2.Click += ႳႣ;
				toolStripMenuItem2.Text = Resources.ControlPanelMenuItemText;
				toolStripMenuItem2.Image = ႨႣႠ(ႰႤႷ.Ⴍ.ႥႳႳ(1514635464));
				list.Add(toolStripMenuItem2);
				list.Add(new ToolStripSeparator());
				this.Ⴐ = (Bitmap)(object)new ToolStripMenuItem();
				Ⴐ = ႨႣႠ(ႰႤႷ.Ⴍ.ႥႳႳ(1514635465));
				this.Ⴈ = (ToolStripMenuItem)(object)ႨႣႠ(ႰႤႷ.Ⴍ.ႥႳႳ(1514635464));
				((ToolStripItem)(object)this.Ⴐ).Image = Ⴐ;
				((ToolStripItem)(object)this.Ⴐ).Click += ႳႠ;
				list.Add((ToolStripItem)(object)this.Ⴐ);
				list.Add(new ToolStripSeparator());
				Ⴈ = new ToolStripMenuItem();
				Ⴈ.Click += ႳႼ;
				num = ((ႭႨႰ.Ⴐ.Ⴐ == null) ? 1 : 0);
			}
		}

		private static Bitmap ႨႣႠ(string Ⴍ)
		{
			using (Stream stream = ႥႥႥ.Ⴗ.ႨႷႣ(Ⴍ))
			{
				return new Icon(stream).ToBitmap();
			}
		}

		private void ႳႠ(object Ⴍ, EventArgs Ⴄ)
		{
			int num = 0;
			while (true)
			{
				switch (num)
				{
				case 3:
					return;
				default:
					num = ((ႭႨႰ.Ⴐ.Ⴐ == null) ? 3 : 2);
					break;
				case 2:
					num = ((ႭႨႰ.Ⴐ.Ⴐ.Ⴃ != null) ? 1 : 3);
					break;
				case 1:
					ႭႨႰ.Ⴐ.Ⴐ.Ⴃ.Ⴗ.Ⴈ.ႤႥ();
					num = 3;
					break;
				}
			}
		}

		private void ႳႣ(object Ⴍ, EventArgs Ⴄ)
		{
			ႨႷႰ();
		}

		private void ႳႭ(object Ⴀ, EventArgs Ⴃ)
		{
			ႥႥႨ.Ⴗ.ႨႷႤ(ႰႤႷ.Ⴍ.ႥႳႳ(1514635470));
			((ToolStripMenuItem)Ⴀ).Enabled = false;
			ႭႨႰ.Ⴐ.Ⴐ.Ⴄ.ႤႠႥ();
		}

		private void ႨႣႣ(bool Ⴓ)
		{
			ႨႷႨ();
		}

		internal void ႳႤ(object Ⴓ, EventArgs Ⴅ)
		{
			ႨႷႰ();
		}

		private void ႨႷႰ()
		{
			//Discarded unreachable code: IL_0002, IL_0022, IL_003f, IL_005d
			while (true)
			{
				bool flag = ႭႨႰ.Ⴐ.Ⴐ == null;
				while (true)
				{
					if (!flag)
					{
						if (292 > 292 - 258)
						{
							flag = (ႭႨႰ.Ⴐ.Ⴐ.Ⴍ == null);
							if (!flag)
							{
								if (94 <= 94 - 28)
								{
								}
								ႭႨႰ.Ⴐ.Ⴐ.Ⴍ.Show();
								if (false)
								{
									continue;
								}
								return;
							}
							return;
						}
						break;
					}
					return;
				}
			}
		}

		private void ႨႷႨ()
		{
			//Discarded unreachable code: IL_0002, IL_0035, IL_005a, IL_008c
			if (!ႭႨႰ.Ⴐ.Ⴐ.Ⴃ.Ⴗ.Ⴈ.Ⴅ)
			{
				((ToolStripItem)(object)this.Ⴐ).Text = Resources.MuteMenuItemText;
				((ToolStripItem)(object)this.Ⴐ).Image = Ⴐ;
				while (976 <= 976 - 612)
				{
				}
			}
			else if (951 > 951 - 205)
			{
				((ToolStripItem)(object)this.Ⴐ).Text = Resources.UnMuteMenuItemText;
				((ToolStripItem)(object)this.Ⴐ).Image = (Image)(object)this.Ⴈ;
			}
		}

		private void ႳႼ(object Ⴓ, EventArgs Ⴅ)
		{
			try
			{
				ႥႥႳႰ.Ⴍ.Ⴐ = !ႥႥႳႰ.Ⴍ.Ⴐ;
				ႭႨႰ.Ⴐ.Ⴐ.Ⴃ.Ⴈ.ႠႼ();
				ႨႷႳ();
				if (!ႥႥႳႰ.Ⴍ.Ⴐ)
				{
					ႭႨႰ.Ⴐ.Ⴐ.Ⴍ.ShowMessageBoxInMainWindow(Resources.ChatmanWillNotBeRun, ႷႭႨ.Ⴗ.Ⴃ);
				}
			}
			catch (Exception ⴓ)
			{
				ႥႥႨ.Ⴗ.ႳႤ(ႰႭႭ.Ⴅ.ႤႥႥ(1514635464), ⴓ);
			}
		}

		private void ႨႷႳ()
		{
			switch (0)
			{
			}
			Ⴈ.Text = ((!ႥႥႳႰ.Ⴍ.Ⴐ) ? Resources.RunOnStartup : Resources.DontRunOnStartup);
		}

		private void ႨႣႭ(ႭႨႰ.Ⴐ Ⴓ)
		{
			ႨႷႷ();
			ႭႨႰ.Ⴐ.Ⴀ -= ႨႣႭ;
		}

		private void ႨႷႷ()
		{
			ႭႨႰ.Ⴐ.Ⴐ.Ⴃ.Ⴗ.Ⴈ.Ⴗ += ႨႣႣ;
			ႨႷႨ();
			ႨႷႳ();
			ႭႨႰ.Ⴐ.Ⴐ.Ⴓ += ႨႷႥ;
		}

		private void ႨႷႥ()
		{
			ႭႨႰ.Ⴐ.Ⴐ.Ⴃ.Ⴗ.Ⴈ.Ⴗ += ႨႣႣ;
			ႨႷႨ();
			ႨႷႳ();
		}
	}
}
namespace Rondyo.Chatman.GUI.Tray
{
	public class TrayGUIManager : IDisposable
	{
		private bool Ⴐ = false;

		private static ႥႥႨႣ.Ⴀ.ႣႣ Ⴗ;

		public TrayGUIManager()
		{
			ႥႥႨ.Ⴗ.ႨႷႤ(ႰႭႭ.Ⴅ.ႤႥႥ(1514635509));
			try
			{
				if (Ⴗ == null)
				{
					Ⴗ = delegate
					{
						ႥႤႷ.Ⴗ.ႳႠ(ႥႤႷ.Ⴍ.ႨႷႰ(), ႥႤႷ.Ⴍ.ႨႷႨ());
					};
				}
				ႥႥႨႣ.Ⴀ.ႨႠႠ(Ⴗ);
			}
			catch (Exception ⴍ)
			{
				ႥႥႨ.Ⴗ.ႨႷႼ(ⴍ);
				throw;
			}
			ႥႥႨ.Ⴗ.ႨႷႤ(ႰႭႭ.Ⴅ.ႤႥႥ(1514635514));
			ႥႥႨႥ.Ⴓ.ႨႷႼ(ႭႨ);
		}

		public void HideTrayIcon()
		{
			ႥႤႷ.Ⴗ.ႨႷႰ();
		}

		public void ShowTrayIcon()
		{
			ႥႤႷ.Ⴗ.ႨႷႨ();
		}

		private void ႭႨ()
		{
			//Discarded unreachable code: IL_0002, IL_0020, IL_0029, IL_002d, IL_0033, IL_005a
			int num = 1;
			while (true)
			{
				bool flag = !ႥႥႨႣ.Ⴀ.Ⴈ.WaitOne(5005);
				while (!flag)
				{
					if ((971 + 971 * 971) % 2 == 0)
					{
						return;
					}
				}
				do
				{
					if (num++ > 3)
					{
						return;
					}
				}
				while (false);
				TrayRefresher.RefreshTrayIcons();
			}
		}

		~TrayGUIManager()
		{
			Dispose(disposing: false);
		}

		public void Dispose()
		{
			Dispose(disposing: true);
			GC.SuppressFinalize(this);
		}

		protected void Dispose(bool disposing)
		{
			int num = 2;
			while (true)
			{
				switch (num)
				{
				default:
					num = (Ⴐ ? 1 : 4);
					break;
				case 4:
					num = (disposing ? 3 : 0);
					break;
				case 3:
					ႥႤႷ.Ⴗ.ႨႷႳ();
					num = 0;
					break;
				case 0:
					num = 1;
					break;
				case 1:
					Ⴐ = true;
					return;
				}
			}
		}

		private static void <.ctor>b__0()
		{
			ႥႤႷ.Ⴗ.ႳႠ(ႥႤႷ.Ⴍ.ႨႷႰ(), ႥႤႷ.Ⴍ.ႨႷႨ());
		}
	}
	public class TrayRefresher
	{
		public static void RefreshTrayIcons()
		{
			IntPtr Ⴍ = IntPtr.Zero;
			IntPtr Ⴄ = IntPtr.Zero;
			bool flag = Environment.OSVersion.Platform == PlatformID.Win32NT && Environment.OSVersion.Version.Major >= 6 && Environment.OSVersion.Version.Minor >= 1;
			List<IntPtr> list = new List<IntPtr>();
			if (!flag)
			{
				ႰႨ(ref Ⴍ, ႰႤႷ.Ⴍ.ႥႳႳ(1514635461));
				ႰႨ(ref Ⴍ, ႰႭႭ.Ⴅ.ႤႥႥ(1514635461));
				Ⴃ(Ⴍ, ref Ⴄ, ႰႭႭ.Ⴅ.ႤႥႥ(1514635466));
				ႰႨ(ref Ⴍ, ႰႤႷ.Ⴍ.ႥႳႳ(1514635466));
				ႰႨ(ref Ⴍ, ႰႭႭ.Ⴅ.ႤႥႥ(1514635467));
				list.Add(Ⴍ);
				if (Ⴄ != IntPtr.Zero)
				{
					ႥႥႨႭ.Ⴀ.Ⴗ(Ⴄ, 245, new IntPtr(0), new IntPtr(0));
				}
			}
			else
			{
				ႰႨ(ref Ⴍ, ႰႤႷ.Ⴍ.ႥႳႳ(1514635467));
				ႰႨ(ref Ⴍ, ႰႭႭ.Ⴅ.ႤႥႥ(1514635467));
				list.Add(Ⴍ);
				Ⴍ = IntPtr.Zero;
				ႰႨ(ref Ⴍ, ႰႤႷ.Ⴍ.ႥႳႳ(1514635461));
				ႰႨ(ref Ⴍ, ႰႭႭ.Ⴅ.ႤႥႥ(1514635461));
				IntPtr Ⴍ2 = Ⴍ;
				ႰႨ(ref Ⴍ, ႰႭႭ.Ⴅ.ႤႥႥ(1514635467));
				list.Add(Ⴍ);
				ႰႨ(ref Ⴍ2, ႰႤႷ.Ⴍ.ႥႳႳ(1514635466));
				ႰႨ(ref Ⴍ2, ႰႭႭ.Ⴅ.ႤႥႥ(1514635467));
				list.Add(Ⴍ2);
			}
			foreach (IntPtr item in list)
			{
				int num = ႥႥႨႭ.Ⴀ.Ⴗ(item, 1082, new IntPtr(0), new IntPtr(0));
				int num2 = (num >> 16) & 0xFFFF;
				int num3 = num2 / 2;
				int num4 = 3;
				do
				{
					int num5 = ႥႥႨႭ.Ⴀ.Ⴗ(item, 1064, new IntPtr(0), new IntPtr(0));
					if (ႥႥႨႭ.Ⴀ.ႳႠ(item, out ႥႥႨႭ.Ⴀ.ႭႰ Ⴓ))
					{
						if (Ⴓ.Ⴅ > Ⴓ.Ⴀ)
						{
							int ⴅ = Ⴓ.Ⴅ;
							Ⴓ.Ⴅ = Ⴓ.Ⴀ;
							Ⴓ.Ⴀ = ⴅ;
						}
						for (int i = 0; i < num5; i++)
						{
							for (int j = num3; j < Ⴓ.Ⴀ; j += num2)
							{
								int value = (j & 0xFFFF) | (((i * num2 + num3) & 0xFFFF) << 16);
								ႥႥႨႭ.Ⴀ.Ⴗ(item, 512, new IntPtr(0), new IntPtr(value));
							}
						}
					}
					num4--;
				}
				while (num4 > 0);
			}
		}

		private static void ႰႨ(ref IntPtr Ⴍ, string Ⴄ)
		{
			//Discarded unreachable code: IL_0002, IL_003a, IL_005f
			while (!(Ⴍ == IntPtr.Zero))
			{
				Ⴍ = ႥႥႨႭ.Ⴀ.Ⴜ(Ⴍ, IntPtr.Zero, Ⴄ, null);
				if (false)
				{
					continue;
				}
				return;
			}
			if (false)
			{
			}
			Ⴍ = ႥႥႨႭ.Ⴀ.ႳႣ(Ⴄ, null);
		}

		private static void Ⴃ(IntPtr Ⴍ, ref IntPtr Ⴄ, string Ⴃ)
		{
			int num = 0;
			while (true)
			{
				switch (num)
				{
				case 3:
					return;
				default:
					num = ((!(Ⴍ == IntPtr.Zero)) ? 1 : 2);
					break;
				case 2:
					Ⴄ = ႥႥႨႭ.Ⴀ.ႳႣ(Ⴃ, null);
					num = 3;
					break;
				case 1:
					Ⴄ = ႥႥႨႭ.Ⴀ.Ⴜ(Ⴍ, IntPtr.Zero, Ⴃ, null);
					num = 3;
					break;
				}
			}
		}
	}
}
namespace ႥႤႷ
{
	internal sealed class Ⴍ
	{
		private static TrayMenuItemsList Ⴐ;

		private static List<ႷႭႨ.Ⴅ> Ⴐ;

		private static ContextMenuStrip Ⴐ;

		internal unsafe static ContextMenuStrip ႨႷႰ()
		{
			ႥႥႨ.Ⴗ.ႨႷႤ(ႰႤႷ.Ⴍ.ႥႳႳ(1514635471));
			Ⴐ = new ContextMenuStrip();
			Ⴐ.RightToLeft = (ႣႳ.Ⴐ.TextInfo.IsRightToLeft ? RightToLeft.Yes : RightToLeft.No);
			try
			{
				string text = ႣႳ.ႨႷႭ(ႰႤႷ.Ⴍ.ႥႳႳ(1514635468));
				Ⴍ.Ⴐ = (ContextMenuStrip)(object)(File.Exists(text) ? Ⴈ<TrayMenuItemsList>.ႨႷႭ(text) : TrayMenuItemsList.ႨႷႰ());
				((TrayMenuItemsList)(object)Ⴍ.Ⴐ).TrayMenuItems.Add(new TrayMenuItem
				{
					AssemblyPath = string.Empty,
					TrayMenuItemBuilderInstance = new DefaultTrayMenuItemBuilder()
				});
				TrayMenuItem[] array = ((TrayMenuItemsList)(object)Ⴍ.Ⴐ).TrayMenuItems.ToArray();
				ႥႥႨႨ.Ⴈ.Ⴗ(array, ႰႭႭ.Ⴅ.ႤႥႥ(1514635465), ႰႤႷ.Ⴍ.ႥႳႳ(1514635469), out *(List<ႷႭႨ.Ⴅ>*)(&Ⴍ.Ⴐ));
				int num = array.Length;
				for (int i = 0; i < num; i++)
				{
					if (array[i].TrayMenuItemBuilderInstance == null)
					{
						array[i].TrayMenuItemBuilderInstance = ((List<ႷႭႨ.Ⴅ>)(object)Ⴍ.Ⴐ)[i];
					}
					else if (!((List<ႷႭႨ.Ⴅ>)(object)Ⴍ.Ⴐ).Contains(array[i].TrayMenuItemBuilderInstance))
					{
						((List<ႷႭႨ.Ⴅ>)(object)Ⴍ.Ⴐ).Add(array[i].TrayMenuItemBuilderInstance);
					}
				}
			}
			catch (Exception ⴍ)
			{
				ႥႥႨ.Ⴗ.ႨႷႼ(ⴍ);
			}
			ႥႥႨ.Ⴗ.ႨႷႤ(ႰႭႭ.Ⴅ.ႤႥႥ(1514635470));
			foreach (ႷႭႨ.Ⴅ item in (List<ႷႭႨ.Ⴅ>)(object)Ⴍ.Ⴐ)
			{
				try
				{
					foreach (ToolStripItem item2 in item.CreateMenuEntries())
					{
						Ⴐ.Items.Add(item2);
					}
				}
				catch (Exception ⴍ)
				{
					ႥႥႨ.Ⴗ.ႳႤ(string.Format(ႰႤႷ.Ⴍ.ႥႳႳ(1514635474), item.GetType()), ⴍ);
				}
			}
			ႥႥႨ.Ⴗ.ႨႷႤ(ႰႭႭ.Ⴅ.ႤႥႥ(1514635471));
			return Ⴐ;
		}

		internal static EventHandler ႨႷႨ()
		{
			foreach (ႷႭႨ.Ⴅ item in (List<ႷႭႨ.Ⴅ>)(object)Ⴍ.Ⴐ)
			{
				if (item is DefaultTrayMenuItemBuilder)
				{
					return (item as DefaultTrayMenuItemBuilder).ႳႤ;
				}
			}
			return null;
		}
	}
	internal sealed class Ⴗ
	{
		private static NotifyIcon Ⴐ;

		private static ႥႥႤ.Ⴀ Ⴐ;

		private static ႥႥႨႣ.Ⴀ.ႣႣ Ⴈ;

		private static ႥႥႨႣ.Ⴀ.ႣႣ Ⴗ;

		private static ႥႥႨႣ.Ⴀ.ႣႣ Ⴃ;

		private static ႥႥႨႣ.Ⴀ.ႣႣ Ⴍ;

		private static ႥႥႨႣ.Ⴀ.ႣႣ Ⴅ;

		public static void ႨႷႰ()
		{
			//Discarded unreachable code: IL_0002, IL_001d, IL_0036, IL_0058
			while (true)
			{
				bool flag = ႥႤႷ.Ⴗ.Ⴐ == null;
				while (true)
				{
					if (flag)
					{
						return;
					}
					if (513 <= 513 - 66)
					{
						break;
					}
					if (Ⴈ == null)
					{
						if (962 < 962 - 630)
						{
							break;
						}
						Ⴈ = delegate
						{
							((NotifyIcon)(object)ႥႤႷ.Ⴗ.Ⴐ).Visible = false;
						};
						if (false)
						{
							break;
						}
					}
					ႥႥႨႣ.Ⴀ.ႨႠႠ(Ⴈ);
					if (false)
					{
						continue;
					}
					return;
				}
			}
		}

		public static void ႨႷႨ()
		{
			int num = 6;
			while (true)
			{
				switch (num)
				{
				case 5:
					return;
				default:
					num = ((ႥႤႷ.Ⴗ.Ⴐ != null) ? 8 : 0);
					break;
				case 0:
					num = 5;
					break;
				case 8:
					num = ((!ႥႥႨႣ.Ⴀ.Ⴐ) ? 4 : 9);
					break;
				case 9:
					num = 5;
					break;
				case 4:
					num = ((Ⴗ != null) ? 3 : 2);
					break;
				case 2:
					Ⴗ = delegate
					{
						((NotifyIcon)(object)ႥႤႷ.Ⴗ.Ⴐ).Visible = true;
					};
					num = 3;
					break;
				case 3:
					ႥႥႨႣ.Ⴀ.ႨႠႠ(Ⴗ);
					num = ((ႨႷႥ() != null) ? 1 : 7);
					break;
				case 7:
					num = 5;
					break;
				case 1:
					ႨႣႼ(ႨႷႥ().Ⴀ);
					ႨႣႤ(ႨႷႥ().Ⴗ);
					num = 5;
					break;
				}
			}
		}

		internal static void ႳႠ(ContextMenuStrip Ⴍ, EventHandler Ⴓ)
		{
			ႥႤႷ.Ⴗ.Ⴐ = (ႥႥႤ.Ⴀ)(object)new NotifyIcon();
			((NotifyIcon)(object)ႥႤႷ.Ⴗ.Ⴐ).Icon = new Icon(ႥႥႥ.Ⴅ.ႨႳႨ(), SystemInformation.SmallIconSize);
			((NotifyIcon)(object)ႥႤႷ.Ⴗ.Ⴐ).Text = Resources.TrayIconToolTipUnknown;
			((NotifyIcon)(object)ႥႤႷ.Ⴗ.Ⴐ).DoubleClick += Ⴓ;
			((NotifyIcon)(object)ႥႤႷ.Ⴗ.Ⴐ).MouseDoubleClick += ႳႣ;
			((NotifyIcon)(object)ႥႤႷ.Ⴗ.Ⴐ).ContextMenuStrip = Ⴍ;
			ႭႨႰ.Ⴐ.Ⴀ += ႨႣႠ;
			((NotifyIcon)(object)ႥႤႷ.Ⴗ.Ⴐ).Visible = true;
		}

		private static void ႳႣ(object Ⴍ, MouseEventArgs Ⴓ)
		{
			int num = 1;
			EventHandler eventHandler = default(EventHandler);
			while (true)
			{
				switch (num)
				{
				case 2:
					return;
				default:
					eventHandler = (((NotifyIcon)Ⴍ).Tag as EventHandler);
					num = ((eventHandler == null) ? 2 : 0);
					break;
				case 0:
					eventHandler(Ⴍ, new EventArgs());
					num = 2;
					break;
				}
			}
		}

		internal static void ႨႷႳ()
		{
			try
			{
				if (ႥႤႷ.Ⴗ.Ⴐ != null)
				{
					((NotifyIcon)(object)ႥႤႷ.Ⴗ.Ⴐ).Visible = false;
					((Component)(object)ႥႤႷ.Ⴗ.Ⴐ).Dispose();
				}
			}
			catch (Exception ⴓ)
			{
				ႥႥႨ.Ⴗ.ႳႤ(ႰႭႭ.Ⴅ.ႤႥႥ(1514635457), ⴓ);
			}
		}

		internal static void ႨႷႷ()
		{
			try
			{
				if (Ⴃ == null)
				{
					Ⴃ = delegate
					{
						((NotifyIcon)(object)ႥႤႷ.Ⴗ.Ⴐ).Text = Resources.TrayIconToolTipNotConnected;
						((NotifyIcon)(object)ႥႤႷ.Ⴗ.Ⴐ).ShowBalloonTip(30000, Resources.ChatmanNotConnectedMessageTitle, Resources.ChatmanNotConnectedMessage, ToolTipIcon.Error);
					};
				}
				ႥႥႨႣ.Ⴀ.ႨႠႠ(Ⴃ);
				ႨႷႠ();
			}
			catch (Exception ⴍ)
			{
				ႥႥႨ.Ⴗ.ႨႷႼ(ⴍ);
			}
		}

		private static ႷႭႥ.Ⴄ ႨႷႥ()
		{
			return ႭႨႰ.Ⴐ.Ⴐ.Ⴃ.Ⴗ;
		}

		private static void ႨႣႠ(ႭႨႰ.Ⴐ Ⴍ)
		{
			ႭႨႰ.Ⴐ.Ⴀ -= ႨႣႠ;
			ႨႷႥ().Ⴐ += ႨႣႣ;
			ႨႷႥ().Ⴓ += ႨႣႭ;
		}

		private static void ႨႣႣ(ႷႭႨ.Ⴐ Ⴍ)
		{
			ႨႣႼ(Ⴍ);
		}

		private static void ႨႣႭ(byte Ⴍ)
		{
			ႨႣႤ(Ⴀ: true);
		}

		private static void ႨႣႤ(bool Ⴀ)
		{
			int num = 0;
			while (true)
			{
				switch (num)
				{
				case 1:
					return;
				}
				num = (Ⴀ ? 1 : 1);
			}
		}

		private static void ႨႣႼ(ႷႭႨ.Ⴐ Ⴍ)
		{
			try
			{
				if (Ⴍ == ႷႭႨ.Ⴐ.Ⴓ)
				{
					if (ႥႤႷ.Ⴗ.Ⴍ == null)
					{
						ႥႤႷ.Ⴗ.Ⴍ = delegate
						{
							((NotifyIcon)(object)ႥႤႷ.Ⴗ.Ⴐ).Text = Resources.TrayIconToolTipConnected;
							ႨႷႭ();
						};
					}
					ႥႥႨႣ.Ⴀ.ႨႠႠ(ႥႤႷ.Ⴗ.Ⴍ);
				}
				else
				{
					ႨႷႷ();
				}
			}
			catch (Exception ⴍ)
			{
				ႥႥႨ.Ⴗ.ႨႷႼ(ⴍ);
			}
		}

		private static void ႨႷႠ()
		{
			int num = 0;
			while (true)
			{
				switch (num)
				{
				case 1:
					return;
				default:
					num = ((Ⴐ != null) ? 2 : 3);
					break;
				case 3:
					Ⴐ = ႥႥႤ.Ⴀ.Ⴍ(ႨႷႣ, 30000.0, -1.0);
					num = 1;
					break;
				case 2:
					Ⴐ.ႳႭ(30000.0, -1.0);
					num = 1;
					break;
				}
			}
		}

		private static void ႨႷႣ()
		{
			//Discarded unreachable code: IL_0002, IL_0018
			if (!ႥႥႨႣ.Ⴀ.Ⴐ)
			{
				if ((202 + 202 * 202) % 2 == 0)
				{
					ႨႷႭ();
					if (false)
					{
						goto IL_003c;
					}
				}
			}
			Ⴐ.Dispose();
			goto IL_003c;
			IL_003c:
			Ⴐ = null;
		}

		private static void ႨႷႭ()
		{
			try
			{
				if (ႥႤႷ.Ⴗ.Ⴐ != null)
				{
					if (Ⴅ == null)
					{
						Ⴅ = delegate
						{
							((NotifyIcon)(object)ႥႤႷ.Ⴗ.Ⴐ).Visible = false;
							((NotifyIcon)(object)ႥႤႷ.Ⴗ.Ⴐ).Visible = true;
						};
					}
					ႥႥႨႣ.Ⴀ.ႨႠႠ(Ⴅ);
				}
			}
			catch (Exception ⴓ)
			{
				ႥႥႨ.Ⴗ.ႳႤ(ႰႤႷ.Ⴍ.ႥႳႳ(1514635457), ⴓ);
			}
		}

		private static void <HideTrayIcon>b__0()
		{
			((NotifyIcon)(object)ႥႤႷ.Ⴗ.Ⴐ).Visible = false;
		}

		private static void <ShowTrayIcon>b__2()
		{
			((NotifyIcon)(object)ႥႤႷ.Ⴗ.Ⴐ).Visible = true;
		}

		private static void <NotifyNotConnected>b__4()
		{
			((NotifyIcon)(object)ႥႤႷ.Ⴗ.Ⴐ).Text = Resources.TrayIconToolTipNotConnected;
			((NotifyIcon)(object)ႥႤႷ.Ⴗ.Ⴐ).ShowBalloonTip(30000, Resources.ChatmanNotConnectedMessageTitle, Resources.ChatmanNotConnectedMessage, ToolTipIcon.Error);
		}

		private static void <HandleStateChange>b__6()
		{
			((NotifyIcon)(object)ႥႤႷ.Ⴗ.Ⴐ).Text = Resources.TrayIconToolTipConnected;
			ႨႷႭ();
		}

		private static void <CloseBalloonTip>b__8()
		{
			((NotifyIcon)(object)ႥႤႷ.Ⴗ.Ⴐ).Visible = false;
			((NotifyIcon)(object)ႥႤႷ.Ⴗ.Ⴐ).Visible = true;
		}
	}
}
namespace ႰႤႷ
{
	internal sealed class Ⴍ
	{
		private static readonly char[] m_Ⴍ;

		private static readonly string[] m_Ⴍ;

		internal static string ႥႳႳ(int Ⴃ)
		{
			int num = Ⴃ ^ 0x5A4780E2;
			string result;
			if ((result = m_Ⴍ[num]) != null)
			{
				return result;
			}
			object obj;
			switch (num)
			{
			default:
				obj = null;
				break;
			case 0:
				obj = "\u0dd2न\u05ba՟ग\u05f9\u0cc2ఒ෫ऩ\u05b7գऽע\u0cfbఏ\u0df7ढ\u05b4ոछ\u05ffಹ\u0c5b\u0df5ब\u05abէगףೲ\u0c5b\u0dcaण\u059bոऑ\u05fe\u0cf0";
				break;
			case 1:
				obj = "ऎ\u05aaձट\u05f9\u0cfcక\u0de2७\u05afսऐש\u0cfaఌණ७\u05afձज׆\u0cfcఏ\u0dd2त\u05b6հऑ\u05fa\u0cc5చ\u0df7ब\u05b5ձऊר೧ఈඥशרթ";
				break;
			case 2:
				obj = "\u0cdcక෬ह\u05b1յऒפ೯ఒ෫प\u05f8ՠऑ\u05fdವఋ\u0de4प\u05bdԴझע\u0cfbఏ\u0df7ढ\u05b4ոछ\u05ff\u0cbb\u0c55ණ";
				break;
			case 3:
				obj = "బ\u0de0य\u0593սऊ\u05ad\u0cf6ఉ\u0de0ब\u05acձच\u05ad\u0cf4క\u0de1७\u05b1պग\u05f9\u0cfcచ෩त\u05a2ձच\u05a3";
				break;
			case 4:
				obj = "ऩר\u0cf7ర෬ह֏սऐש\u0cfaఌෆढ\u05b6ՠऌע\u0cf9గ\u0de0\u093f\u05f8սऍ\u05ad\u0cf6చ෩ड\u05bdհॐ";
				break;
			case 5:
				obj = "\u05ccೱట෬ण\u05bfԴछ\u05fb\u0cf0క\u0df1७\u05b0յऐש\u0cf9ఞ\u0df7\u093e\u05f6";
				break;
			case 6:
				obj = "\u058bդछ\u05ee\u0cfcచ෩ऌ\u05bbՠगע\u0cfbఈණऩ\u05b9ՠ";
				break;
			case 7:
				obj = "Ցऌ\u05ff\u0cfaఉඥ\u093e\u05adնओפೡఏ෬ण\u05bfԴऍ\u05fd\u0cf0ఘ෬ब\u05b4Դट\u05eeೡఒ෪ण";
				break;
			case 8:
				obj = "ශन־յऋסೡ";
				break;
			case 9:
				obj = "ऋ\u05b9սऒרೱ\u0c5b\u0df1ढ\u05f8զछת\u0cfcఈ\u0df1न\u05aaԴगףೡఞ\u0df7ण\u05b9ոफ़\u05ee\u0cfaఖ෨ब\u05b6հफ़\u05fa\u0cfcఏ෭७\u05bdլझר\u0ce5ఏ෬ढ\u05b6";
				break;
			case 10:
				obj = "\u0cd3ఔ\u0df7७\u05ffկ\u094eװಲ\u0c5b෬ण\u05aeջकפ\u0cfbజඥम\u05b7չओ\u05ec\u0cfbటඥ४\u05a3ԥ\u0903\u05aaವఌ෬ह\u05b0Դट\u05ffೲఎ෨न\u05b6ՠफ़\u05f6ಧఆ";
				break;
			case 11:
				obj = "మ෫\u093e\u05adնऍ\u05ee೧ఒ෧त\u05b6ճफ़\u05eb೧ఔ෨७\u05bdլछ\u05eeೠఏ\u0de0ऎ\u05b7պऊ\u05ff\u0cfaగෆढ\u05b5չटףೱ\u0c5b\u0de0\u093b\u05bdպऊ\u05ad\u0cf3ఔ\u0df7७\u05afձज׆\u0cfcఏ\u0dccऩץկ\u094eװ";
				break;
			case 12:
				obj = "ऩ\u05cc\u0cc7వ\u0dcc\u0903\u059fԵफ़ך\u0cf0ఙ\u0dceत\u05ac՝च\u05b0೮\u0c4b\u0df8७\u05b6ջऊ\u05ad\u0cf0\u0c03෬\u093e\u05acԵ";
				break;
			case 13:
				obj = "ץ\u0cfaఈ\u0df1ॷ\u05f8կ\u094eװಹ\u0c5b෭ढ\u05abՠॐ\u05c5\u0cf4క\u0de1ड\u05bdԮफ़\u05f6ತఆඩ७\u05b0ջऍ\u05f9\u0cbbబ෬ऩ\u05acռ\u0944\u05ad೮\u0c49\u0df8";
				break;
			case 14:
				obj = "\u05f8սऍ\u05ad\u0cfbఔ\u0df1७\u05b9ոग\u05fb\u0cf0ౚඥऎ\u05b9պख़\u05f9ವ\u0c3c෪७\u05acջफ़\u05f8೧గණ\u0963\u05f6";
				break;
			case 15:
				obj = "Ճछׯ\u0cfeఒ\u0df1अ\u05b9պचס\u0cf0\u0c5bඦ";
				break;
			case 16:
				obj = "ෆढ\u05b5չटףೱ\u0c5bජशרթख़\u05ad\u0cfbఔ\u0df1७\u05b0յऐש\u0cf9ఞ\u0de1७\u05bcաछ\u05ad\u0cfbఔඥ\u093b\u05b9ոगשವఓ\u0de4ण\u05bcոछ\u05ffವచ\u0df3ब\u05b4սजס\u0cf0\u0c55";
				break;
			case 17:
				obj = "ञ\u05b0ջउפ\u0cfbజඥ\u093a\u05bdնवפೡ\u0c5b\u0df2त\u05b6հऑ\u05fa\u0cbb\u0c55ණ";
				break;
			case 18:
				obj = "\u0cc5ఉ\u0de0ऽ\u05b9զगףೲ\u0c5b\u0df2न\u05baտग\u05f9ವఏ෪७\u05abռऋ\u05f9ೱఔ\u0df2ण\u05f6";
				break;
			case 19:
				obj = "ట\u0de0ड\u05b1բछ\u05ff\u0cfcక\u0de2७\u0597պऽס\u0cfaఈ෬ण\u05bfԴछ\u05fb\u0cf0క\u0df1७\u05acջफ़\u05feೠఙ\u0df6म\u05aaսजר೧ఈ";
				break;
			case 20:
				obj = "रעವఈ\u0df0य\u05abշऌפ\u0cf7ఞ\u0df7\u093e\u05f8ղऑ\u05ffವఴ෫ऎ\u05b4ջऍרೱ\u0c5b\u0de0\u093b\u05bdպऊ";
				break;
			case 21:
				obj = "\u05ce\u0cd8హ\u0df7ढ\u05afէछ\u05ff\u0cddఔ\u0df6ह\u05f6ձआר";
				break;
			case 22:
				obj = "\u058bձऊך\u0cfcక\u0de1ढ\u05afՄऒ\u05ec\u0cf6ఞ෨न\u05b6ՠफ़\u05a0ವ";
				break;
			case 23:
				obj = "Ֆऌע\u0ce2ఈ\u0de0\u093f\u0590ջऍ\u05f9\u0cd6ఔ෫ह\u05aaջऒס\u0cf0ఉඥऩ\u05b1էऎע೦ఞඥ\u093f\u05adպऐפ\u0cfbజ";
				break;
			case 24:
				obj = "\u0dd7स\u05b6պगףೲ\u0c5b෧\u093f\u05b7գऍר೧ళ෪\u093e\u05acԺॐ\u05a3";
				break;
			case 25:
				obj = "ए\u05aaջउ\u05fe\u0cf0ఉ\u0dcdढ\u05abՠफ़\u05fa\u0cfcక\u0de1ढ\u05afԴऐעೡ\u0c5b\u0de3ढ\u05adպच\u05ac";
				break;
			case 26:
				obj = "\u0cd6ఓ\u0de4ह\u05b5յऐ׃\u0cfaఏෆढ\u05b6պछ\u05eeೡఞ\u0de1\u0900\u05bdէऍ\u05ecೲఞ\u0dd1त\u05acոछ";
				break;
			case 27:
				obj = "స෭ब\u05acչटף\u0cc7ఞ\u0df6न\u05acՒटפ\u0cf9ఞ\u0de1\u0900\u05bdէऍ\u05ecೲఞ\u0dd1त\u05acոछ";
				break;
			case 28:
				obj = "ऽע\u0cfbఏ\u0df7ढ\u05b4Մटף\u0cf0గ\u0dc8न\u05b6աष\u05f9\u0cf0ఖ\u0dd1न\u05a0ՠ";
				break;
			case 29:
				obj = "\u05c8೭ఒ\u0df1\u0900\u05bdպऋ\u05c4ೡఞ෨ङ\u05bdլऊ";
				break;
			case 30:
				obj = "\u0595աऊר\u0cd8ఞ෫स\u0591ՠछנ\u0cc1ఞ\u0dfdह";
				break;
			case 31:
				obj = "Նछ\u05fe\u0cf0ఏ\u0dd5न\u05aaէऑף\u0cf4గ෬ह\u05b1ձऍ";
				break;
			case 32:
				obj = "\u0dd6ह\u05b9զऊפ\u0cfbజ\u0dd0ऽ";
				break;
			case 33:
				obj = "ङ\u05aaյइ\u05c4\u0cf6ఔ෫ङ\u05b7ջऒי\u0cfcఋෆढ\u05b6պछ\u05eeೡఞ\u0de1";
				break;
			case 34:
				obj = "\u0cc1ఉ\u0de4ऴ\u0591շऑף\u0cc1ఔ෪ड\u058cսऎט\u0cfbఐ෫ढ\u05afպ";
				break;
			case 35:
				obj = "\u0c3e\u0df7\u093f\u05b7զफ़פ\u0cfb\u0c5bෆड\u05b7էछ\u05cf\u0cf4గ෩ढ\u05b7պपפ\u0ce5\u0c55";
				break;
			case 36:
				obj = "\u0952";
				break;
			case 37:
				obj = "\u05ee\u0cfaక\u0df1\u093f\u05b7ոऍ\u05a3";
				break;
			case 38:
				obj = "\u05baսऐש";
				break;
			case 39:
				obj = "Շखר\u0cf9గ\u0ddaङ\u05aaյइך\u0cfbట";
				break;
			case 40:
				obj = "\u0dd6ऴ\u05abՄटת\u0cf0ఉ";
				break;
			case 41:
				obj = "\u0903\u05b7ՠग\u05eb೬ల෦ढ\u05b6՛ईר೧ఝ෩ढ\u05afՃगףೱఔ\u0df2";
				break;
			case 42:
				obj = "\u0cd6ఓ\u0de4ह\u05b5յऐמ\u0cf8చ෩ड\u0591շऑף\u0cbbఒ෦ढ";
				break;
			case 43:
				obj = "స෭ब\u05acչटף\u0cc6ఖ\u0de4ड\u05b4՝झע\u0cfbశ\u0df0ह\u05bdԺग\u05ee\u0cfa";
				break;
			case 44:
				obj = "भץೠఏශढ\u05afպफ़\u05ff\u0cf0ఊ\u0df0न\u05abՠछשವఝ\u0df7ढ\u05b5Դप\u05ff\u0cf4\u0c02ඥठ\u05bdպऋ\u05a3\u0cbb\u0c55";
				break;
			case 45:
				obj = "\u05c1\u0cfaచ\u0de1त\u05b6ճफ़\u05f9೧చ\u0dfc७\u05b5ձऐ\u05f8ವఘ෪ण־սङ\u05f8೧చ\u0df1त\u05b7պ";
				break;
			case 46:
				obj = "\u058cզट״\u0cd8ఞ෫स\u0591ՠछנ೦\u0c55\u0de1ब\u05ac";
				break;
			case 47:
				obj = "՛जק\u0cf0ఘ\u0df1\u0903\u05b9չछ";
				break;
			case 48:
				obj = "ව\u093f\u05aaջऌ\u05ad\u0cfcక෬ह\u05b1յऒפ೯ఒ෫प\u05f8Հऌ\u05ec೬శ\u0de0ण\u05adԴज\u05f8\u0cfcగ\u0de1न\u05aaԴअ\u05bd೨\u0c5b෬ण\u05f8\u0559छףೠశ\u0de4ण\u05b9ճछ\u05ff\u0cbb";
				break;
			case 49:
				obj = "ङ\u05aaխगףೲ\u0c5b\u0df1ढ\u05f8շख\u05ec\u0cfbజ\u0de0७\u05abդऒ\u05ec೦ఓඥ\u093e\u05bbզछר\u0cfb\u0c5b෨ढ\u05bcձफ़\u05eb\u0cfaఉ෨७\u05a3Ԥ\u0903\u05adೡఔඥशשթ";
				break;
			case 50:
				obj = "\u0cc9క";
				break;
			case 51:
				obj = "ఌ\u0de0य\u0593սऊ\u05a3\u0cd2ఞ\u0df1च\u05b1պचע\u0ce2ఫ෪\u093e\u05f8ԩफ़\u05f6ಥఆඥॡ\u05f8գछׯೞఒ\u0df1\u0963\u059fոऑׯ\u0cf4గ\u0dc8ढ\u05adէछך\u0cf4ఏ෦थ\u05bdզॐ\u05ca\u0cf0ఏෆस\u05aaզछףೡస\u0df0\u093f\u05abջऌם\u0cfaఈත।\u05f8ԩफ़\u05f6ತఆ";
				break;
			case 52:
				obj = "\u093aר\u0cdcక෬ह\u05b1յऒפ೯ఒ෫प\u05f8";
				break;
			case 53:
				obj = "ן\u0cf0ల෫त\u05acսटס\u0cfc\u0c01෬ण\u05bfԴ";
				break;
			case 54:
				obj = "\u0597պम\u05ecೲఞ\u0dc9ढ\u05b9հफ़\u05ff\u0cf0ఘ෬न\u05aeձच\u05ad\u0ce5చ\u0df7ब\u05b5ձऊר೧ఈ\u0dbf७\u05a3Ԥ\u0903\u05a4";
				break;
			case 55:
				obj = "Ւगף\u0cfcఈ෭न\u05bcԴऎ\u05ff\u0cfaఘ\u0de0\u093e\u05abսऐתವఔ\u0de3७\u0597պम\u05ecೲఞ\u0dc9ढ\u05b9հछש";
				break;
			case 56:
				obj = "";
				break;
			case 57:
				obj = "॥";
				break;
			case 58:
				obj = "\u0cbc";
				break;
			case 59:
				obj = "ఌ෬ण\u05bcջउ\u05a3";
				break;
			case 60:
				obj = "म\u05ecೲఞණ";
				break;
			case 61:
				obj = "\u05ce\u0cfaక\u0df1\u093f\u05b7ոऒר೧\u0c5b\u0df6थ\u05b7աऒשವక෪ह\u05f8նछ\u05ad\u0cfbఎ෩ड\u05f6Դषף\u0cfcఏ෬ब\u05b4սऄרವఒ\u0df1७־սऌ\u05feೡ";
				break;
			case 62:
				obj = "ײ";
				break;
			case 63:
				obj = "\u0557ख\u05ecೡఖ\u0de4ण\u059fաग\u05c4ೱగ\u0de0";
				break;
			case 64:
				obj = "\u0dd5ब\u05bfձशפೱట෬ण\u05bf";
				break;
			case 65:
				obj = "झ\u05b9ճछ\u05c1\u0cfaచ\u0de1न\u05bc";
				break;
			case 66:
				obj = "\u0cc5చ\u0de2न֍պऒע\u0cf4ట\u0de0ऩ";
				break;
			case 67:
				obj = "ఫ\u0de4प\u05bd\u0557ऑנ\u0ce5గ\u0de0ह\u05bdոइ\u05c1\u0cfaచ\u0de1न\u05bc";
				break;
			case 68:
				obj = "ऽץ\u0cf4ఏ෨ब\u05b6՝झע\u0cfb\u0c55෬म\u05b7";
				break;
			case 69:
				obj = "\u05c5ೡఖ෩उ\u05aaյउפ\u0cfbజහ\u093f\u05bdյ";
				break;
			case 70:
				obj = "\u05afսऐש\u0cfaఌණ\u0903\u05b9բगת\u0cf4ఏ෬ढ\u05b6Ժघע\u0cf6ఎ\u0df6झ\u05b9ճछ\u05a5\u0cbc";
				break;
			case 71:
				obj = "՚ऑ\u05ad\u0cc2ఞ෧द\u05b1ՠफ़\u05c4\u0cfbఈ\u0df1ब\u05b6շछ\u05adಽబ\u0de0य\u05b3սऊ\u05c5\u0cf4క\u0de1ड\u05bdԽफ़\u05f9\u0cfa\u0c5b\u0de0व\u05bdշऋ\u05f9\u0cf0\u0c5b\u0dcfञ\u05f9";
				break;
			case 72:
				obj = "වव\u05bdշऋ\u05f9\u0cfcక\u0de2७\u0592Շफ़\u05eb\u0cfaఉඥच\u05bdնकפೡళ\u0de4ण\u05bcոछ\u05ad೮\u0c4b\u0df8७\u059bջओ\u05fd\u0cf9ఞ\u0df1न\u05bcԺ";
				break;
			case 73:
				obj = "ञ\u05bdՠऊפ\u0cfbజඥण\u05bdգफ़\u05fa\u0cf0ఙ\u0dceत\u05acԴऎע೦ఒ\u0df1त\u05b7պ\u0944\u05ad೮\u0c4b\u0df8";
				break;
			case 74:
				obj = "\u0cdbఔඥच\u05bdնकפೡ\u0c5b\u0dccण\u05abՠटף\u0cf6ఞඥ॥֏ձजצ\u0cfcఏ\u0dcdब\u05b6հऒר\u0cbc\u0c5b\u0df1ढ\u05f8՚ट\u05fb\u0cfcజ\u0de4ह\u05bdՀऑ\u05ac";
				break;
			case 75:
				obj = "న\u0de0ह\u05acսऐתವక\u0de0\u093a\u05f8ՠछ\u05f5ೡ\u0c5b\u0de3ढ\u05aaԴऍ\u05fd\u0cf9చ\u0df6थעԴअ\u05bd೨";
				break;
			}
			string text = (string)obj;
			int length;
			char[] array = new char[length = text.Length];
			char[] ⴍ = (char[])(object)ႰႤႷ.Ⴍ.m_Ⴍ;
			int num2 = ⴍ.Length;
			for (int num3 = 0; num3 < length; num3 = 1 + num3)
			{
				array[num3] = (char)(ushort)(text[num3] ^ ⴍ[(num3 + Ⴃ) % num2]);
			}
			result = new string(array);
			m_Ⴍ[num] = result;
			return result;
		}

		static Ⴍ()
		{
			byte[] publicKeyToken;
			int num = (publicKeyToken = Assembly.GetExecutingAssembly().GetName().GetPublicKeyToken()).Length;
			char[] array = new char[num];
			for (int i = 0; i < num; i++)
			{
				int num2 = i;
				int num3 = publicKeyToken[i] & 0xFF;
				array[num2] = (char)(num3 ^ (num3 << 4));
			}
			ႰႤႷ.Ⴍ.m_Ⴍ = (string[])(object)array;
			m_Ⴍ = new string[76];
		}
	}
}
namespace ႰႭႭ
{
	internal sealed class Ⴅ
	{
		private static readonly char[] Ⴍ;

		private static readonly string[] Ⴍ;

		internal static string ႤႥႥ(int Ⴃ)
		{
			int num = Ⴃ ^ 0x5A4780E2;
			string result;
			if ((result = Ⴍ[num]) != null)
			{
				return result;
			}
			object obj;
			switch (num)
			{
			default:
				obj = null;
				break;
			case 0:
				obj = "\u0dd2न\u05ba՟ग\u05f9\u0cc2ఒ෫ऩ\u05b7գऽע\u0cfbఏ\u0df7ढ\u05b4ոछ\u05ffಹ\u0c5b\u0df7न\u05bbձग\u05fb\u0cf0టඥ\u0902\u05b6\u0557ऒע೦ఞ";
				break;
			case 1:
				obj = "च\u05bdնवפೡబ෬ण\u05bcջउ\u05ce\u0cfaక\u0df1\u093f\u05b7ոऒר೧\u0c57ඥ\u093f\u05bdշछפ\u0ce3ఞ\u0de1७\u0597պऽס\u0cfaఈ\u0de0७\u05baաऊ\u05ad\u0cfbఔඥ\u093e\u05adնऍ\u05ee೧ఒ෧न\u05aaէ";
				break;
			case 2:
				obj = "\u0cd6ఉ\u0de0ब\u05b1պङ\u05ad\u0cc2ఞ෧आ\u05b1ՠऱף\u0cc2ఒ෫ऩ\u05b7գऍ\u05a3";
				break;
			case 3:
				obj = "స\u0df7न\u05b9սऐתವఏ෪ऽ\u05f8ոछ\u05fb\u0cf0గඥऽ\u05b9ճछ\u05ce\u0cfaక\u0df1\u093f\u05b7ոऒר೧\u0c55";
				break;
			case 4:
				obj = "ऩר\u0cf7ర෬ह֏սऐש\u0cfaఌෆढ\u05b6ՠऌע\u0cf9గ\u0de0\u093f\u05f8սऍ\u05adೱఔ෫न\u05f6";
				break;
			case 5:
				obj = "\u05a9ೡఓ෬\u093e\u05f6՝झע\u0cfb";
				break;
			case 6:
				obj = "\u058bդऒ\u05ec೦ఓ\u0dd6म\u05aaձछף\u0cd3ఔ\u0df7ठ";
				break;
			case 7:
				obj = "Շऎס\u0cf4ఈ෭ॠ\u05abշऌר\u0cf0కඨॠ\u05f5Ղ\u094c\u05a3\u0ce5క\u0de2";
				break;
			case 8:
				obj = "";
				break;
			case 9:
				obj = "ङ\u05b9ռऑנ\u0cf4";
				break;
			case 10:
				obj = "\u0cc6ఋ\u0de0म\u05b1յऒ\u05cc\u0cf6ఏ෬ढ\u05b6էॐש\u0cf4ఏ";
				break;
			case 11:
				obj = "\u0c29\u0de0प\u05b1էऊ\u05ff\u0cfcక\u0de2७\u05bbջओנ\u0cf4క\u0de1७\u05ffկ\u094eװಲ\u0c5b\u0de3ढ\u05aaԴख़\u05f6ತఆජ";
				break;
			case 12:
				obj = "भ\u05f8\u0cf7ఈ෦\u093f\u05b1նगףೲ\u0c5b\u0df1ढ\u05f8ձआר\u0cf6ఎ\u0df1न\u059bջऐ\u05f9೧ఔ෩ऎ\u05b7չओ\u05ec\u0cfbటඥन\u05aeձऐ\u05f9ವఝ෪\u093f\u05f8գछׯೞఒ\u0df1ऄ\u05bcԩअ\u05bd೨";
				break;
			case 13:
				obj = "\u05c8\u0cc7\u0c29\u0dcaट\u05f9Դऩר\u0cf7ర෬ह\u0591հ\u0943\u05f6ಥఆඥण\u05b7ՠफ़ר೭ఒ\u0df6ह\u05f9";
				break;
			case 14:
				obj = "֏ձजצ\u0cfcఏ\u0dcdब\u05b6հऒרವౘ";
				break;
			case 15:
				obj = "Նछ\u05ee\u0cf0ఒ\u0df3न\u05bcԴझע\u0cf8ఖ\u0de4ण\u05bcԴघ\u05ff\u0cfaఖඥ\u093a\u05bdնकפೡ\u0c55ඥच\u05bdնकפೡళ\u0de4ण\u05bcոछ\u05adನ\u0c5bජश\u05ebթख़\u05a1ವఒ\u0de1॰\u05ffկ\u094eװಲ\u0c57ඥम\u05b7չओ\u05ec\u0cfbటම४\u05a3ԥ\u0903\u05aaಹ\u0c5b෨\u093e\u05bfԩख़\u05f6ಧఆජ";
				break;
			case 16:
				obj = "ඥत\u05abԴऐעೡ\u0c5b\u0de4ड\u05b1բछ\u05acವస\u0de4ण\u05ffՠफ़ר೭ఞ෦स\u05acձफ़\u05c7\u0cc6\u0c5b෪ण\u05f8սऊ\u05ac";
				break;
			case 17:
				obj = "\u0903\u05b7Դऍ\u05f8\u0cf7ఈ෦\u093f\u05b1նछ\u05ff೦\u0c5b\u0de3ढ\u05aaԴऱף\u0cd6గ෪\u093e\u05b1պङ\u05ad\u0cf0\u0c0d\u0de0ण\u05ac";
				break;
			case 18:
				obj = "ೱఞ෩त\u05aeձऌפ\u0cfbజඥ\u0902\u05b6\u0557ऒע೦ఞ\u0de1७\u05bdբछףೡ\u0c5b\u0df1ढ\u05f8էऋׯ೦ఘ\u0df7त\u05baձऌ\u05fe";
				break;
			case 19:
				obj = "ఽ෪स\u05b6հफ़\u05ec\u0cfbఔ\u0df1थ\u05bdզफ़ׯ೧ఔ\u0df2\u093e\u05bdզफ़׀\u0cf4ఒ෫च\u05b1պचע\u0ce2\u0c5b\u0de4ण\u05bcԴऎ\u05ff\u0cfaఘ\u0de0\u093e\u05abԺॐ\u05a3ವఐ෬ड\u05b4սऐת\u0cbb\u0c55ණ७ֈզऑ\u05ee\u0cf0ఈ\u0df6ऄ\u05bcԩअ\u05bd೨";
				break;
			case 20:
				obj = "टׯ\u0cfaఎ\u0df1ॷ\u05baոटף\u0cfe";
				break;
			case 21:
				obj = "\u05f9೧\u0c02෬ण\u05bfԴऊעವఖ෪\u093b\u05bdԴगףವక\u0de0\u093a\u05f8դऑ\u05feಯ\u0c5b\u0dfeॽ\u05a5";
				break;
			case 22:
				obj = "\u05baզऑ\u05fa೦ఞ\u0df7अ\u05b7էऊ\u05ad\u0cfcఈඥ\u0903֍\u0558ल\u05ac";
				break;
			case 23:
				obj = "՝ऐפೡఒ\u0de4ड\u05b1ծगףೲ\u0c5b\u0df1\u093f\u05b9խफ़\u05ca\u0cc0లඥठ\u05b9պटת\u0cf0ఉ";
				break;
			case 24:
				obj = "\u0dd1\u093f\u05b9խफ़\u05ca\u0cc0లඥठ\u05b9պटת\u0cf0ఉඥत\u05b6սऊפ\u0cf4గ෬ष\u05bdհ";
				break;
			case 25:
				obj = "ऎ\u05b0յऊנ\u0cf4క\u0dcbढ\u05ac\u0557ऑף\u0cfbఞ෦ह\u05bdհळר೦ఈ\u0de4प\u05bd";
				break;
			case 26:
				obj = "\u0cd6ఓ\u0de4ह\u05b5յऐן\u0cf0ఈ\u0de0ह\u059eյगס\u0cf0ట";
				break;
			case 27:
				obj = "స෭ब\u05acչटף\u0cc2ఒ෩ड\u0596ջऊ\u05cf\u0cf0\u0c29\u0df0ण";
				break;
			case 28:
				obj = "\u093aע\u0cfbఏ\u0dd7स\u05b6՛ऐמೡచ\u0df7ह\u05adդ";
				break;
			case 29:
				obj = "\u05cb\u0cfcఉ\u0df6ह\u058cսओר\u0cc6ఏ\u0de4\u093f\u05acաऎ";
				break;
			case 30:
				obj = "֊ձऍרೡ\u0c3a෩ड\u059cյऊ\u05ec";
				break;
			case 31:
				obj = "Նऋף\u0cdaక\u0dd6ह\u05b9զऊ\u05f8\u0ce5";
				break;
			case 32:
				obj = "\u0dd1ढ\u05bfճऒר\u0cd8ఎ\u0df1न";
				break;
			case 33:
				obj = "ङ\u05aaյइ\u05c4\u0cf6ఔ෫ङ\u05b7ջऒי\u0cfcఋ\u0dcbढ\u05ac\u0557ऑף\u0cfbఞ෦ह\u05bdհ";
				break;
			case 34:
				obj = "\u0cc0క\u0dc8स\u05acձळר\u0cfbఎ\u0dccह\u05bdչपר೭ఏ";
				break;
			case 35:
				obj = "\u0c3e\u0df7\u093f\u05b7զफ़\u05ff\u0cf0ఖ෪\u093b\u05b1պङ\u05adೡఉ\u0de4ऴ\u05f8սझע\u0cfb";
				break;
			case 36:
				obj = "ॐ";
				break;
			case 37:
				obj = "\u05a5";
				break;
			case 38:
				obj = "ױ";
				break;
			case 39:
				obj = "Հऌ\u05ec೬వ෪ह\u05b1ղइך\u0cfbట";
				break;
			case 40:
				obj = "\u0dc7स\u05acՠऑף";
				break;
			case 41:
				obj = "ङ\u05b7ջऒׯ\u0cf4ఉ\u0dd2त\u05b6հऑ\u05faದ\u0c49";
				break;
			case 42:
				obj = "\u0cd3చ෬ड\u05bdհफ़\u05f9\u0cfa\u0c5b\u0df6न\u05acԴऌ\u05f8\u0cfb\u0c5b෪ण\u05f8էऊ\u05ec೧ఏ\u0df0ऽ";
				break;
			case 43:
				obj = "\u0c3a\u0df6\u093e\u05bdչजס೬ఫ\u0de4ह\u05b0";
				break;
			case 44:
				obj = "षף\u0cfcఏ෬ब\u05b4սऄפ\u0cfbజඥह\u05aaյइ\u05ad\u0cf8ఞ෫स\u05f8շऑנ\u0ce5ఔ෫न\u05b6ՠऍ";
				break;
			case 45:
				obj = "י೧చ\u0dfc७\u05b5ձऐ\u05f8ವఘ෪ठ\u05a8ջऐר\u0cfbఏ\u0df6७\u05b1պग\u05f9\u0cfcచ෩त\u05a2ձच";
				break;
			case 46:
				obj = "\u058bռऑ\u05fa\u0cfcక\u0de2\u0900\u05b7հछ";
				break;
			case 47:
				obj = "Շऎס\u0cf4ఈ෭७\u05abշऌר\u0cf0కඥठ\u05b7հछ\u05ad೦ఞ\u0df1ह\u05bdհफ़\u05f9\u0cfa\u0c5b\u0dfeॽ\u05a5";
				break;
			case 48:
				obj = "\u0dd5ब\u05bfձशפೱట෬ण\u05bf";
				break;
			case 49:
				obj = "झ\u05b9ճछט\u0cfbగ෪ब\u05bcձच";
				break;
			case 50:
				obj = "\u0cc5చ\u0de2न\u0594ջटש\u0cf0ట";
				break;
			case 51:
				obj = "ఫ\u0de4प\u05bd\u0557ऑנ\u0ce5గ\u0de0ह\u05bdոइ\u05c1\u0cfaచ\u0de1न\u05bc";
				break;
			case 52:
				obj = "\u093a\u05ff\u0cf4జ\u0dccण\u05b1ՠग\u05ecೡఞ\u0de1";
				break;
			case 53:
				obj = "נ\u0cfaఎ\u0df6न\u0599շऊפ\u0cfaకඥ॰\u05f8կ\u094cװಹ\u0c5b෨ढ\u05adէछ\u05ce\u0cfaఔ\u0df7ऩ\u05b1պट\u05f9\u0cf0ఈඥ॰\u05f8կ\u094eװಹ\u0c5b\u0df6ह\u05b9զऊם\u0cfaఈ෬ह\u05b1ջऐ\u05c9\u0cf0గ\u0df1बץկ\u094fװ";
				break;
			case 54:
				obj = "\u058bՠट\u05ffೡ\u0c5b\u0df5\u093f\u05b7շछ\u05fe೦ఒ෫प\u05f8ղऑ\u05ffವఴ෫झ\u05b9ճछ\u05c1\u0cfaచ\u0de1न\u05bc";
				break;
			case 55:
				obj = "Փऋפವక෪ह\u05f8սऐפೡఒ\u0de4ड\u05b1ծछש\u0cb4\u0c5bෆब\u05b6Գऊ\u05adೱఞ\u0df6न\u05aaսटס\u0cfc\u0c01\u0de0७\u0597պम\u05ecೲఞ\u0dc9ढ\u05b9հछש\u0cd1చ\u0df1ब\u05f8ջजק\u0cf0ఘ\u0df1७־զऑנವఈ\u0df1\u093f\u05b1պङ\u05b7ವ";
				break;
			case 56:
				obj = "ෆथ\u05b9ՠओ\u05ec\u0cfbమ\u0df6न\u05aaՕझ\u05f9\u0cfc\u0c0d෬ह\u05a1";
				break;
			case 57:
				obj = "ॡ";
				break;
			case 58:
				obj = "\u0cd0\u0c03\u0de0म\u05adՠगףೲ\u0c5b\u0dcfञעԴअ\u05bd೨";
				break;
			case 59:
				obj = "ఘ෪ण\u05acզऑס\u0cf0ఉණऄ\u05bc";
				break;
			case 60:
				obj = "षף\u0ce3ఔ෮त\u05b6ճफ़\u05f6ಥఆ";
				break;
			case 61:
				obj = "\u05ce\u0cf9ఞ\u0de4\u093f\u05b1պङ\u05ad";
				break;
			case 62:
				obj = "֊ջऐש೬ఔණऎ\u05b0յऊנ\u0cf4క";
				break;
			case 63:
				obj = "Ճछׯೞఒ\u0df1ॿ֏ձजכ\u0cfcఞ\u0df2च\u05b1պचע\u0ce2స෩ब\u05abէ";
				break;
			case 64:
				obj = "\u0dcdह\u05b5ոसע೧ఖ";
				break;
			case 65:
				obj = "ई\u05a0ձझ\u05f8ೡఒ෫प\u05f8՞भ\u05ad\u0cf3ఔ\u0df7७֏ձजצ\u0cfcఏ\u0dcdब\u05b6հऒרವ\u0c00පरעԴअ\u05bd೨";
				break;
			case 66:
				obj = "\u0cbf";
				break;
			case 67:
				obj = "\u0c3c\u0de0ह\u05acսऐתವఘ\u0df0\u093f\u05aaձऐ\u05f9ವఌ\u0de0य\u0593սऊ\u05ad\u0ce5ఔ\u0df6त\u05acսऑףಯ\u0c5b\u0dfeॽ\u05a5";
				break;
			}
			string text = (string)obj;
			int length;
			char[] array = new char[length = text.Length];
			char[] ⴍ = (char[])(object)Ⴅ.Ⴍ;
			int num2 = ⴍ.Length;
			for (int num3 = 0; num3 < length; num3 = 1 + num3)
			{
				array[num3] = (char)(ushort)(text[num3] ^ ⴍ[(num3 + Ⴃ) % num2]);
			}
			result = new string(array);
			Ⴍ[num] = result;
			return result;
		}

		static Ⴅ()
		{
			byte[] publicKeyToken;
			int num = (publicKeyToken = Assembly.GetExecutingAssembly().GetName().GetPublicKeyToken()).Length;
			char[] array = new char[num];
			for (int i = 0; i < num; i++)
			{
				int num2 = i;
				int num3 = publicKeyToken[i] & 0xFF;
				array[num2] = (char)(num3 ^ (num3 << 4));
			}
			Ⴅ.Ⴍ = (string[])(object)array;
			Ⴍ = new string[68];
		}
	}
}
