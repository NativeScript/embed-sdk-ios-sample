//
//  ViewController.swift
//  MyCoolApp
//
//  Created by MyTeam on 2/16/23.
//

import UIKit
import NativeScriptSDK

class ViewController: UIViewController {
    
    var nativeScriptPresenter: NativeScriptPresenter?
    var ns: NativeScript?
    
    override func viewDidLoad() {
        super.viewDidLoad()
        // setup the NativeScript presenter by providing it this ViewController
        // and using the presenter as the NativeScriptEmbedder's delegate
        nativeScriptPresenter = NativeScriptPresenter()
        nativeScriptPresenter?.vc = self
        NativeScriptEmbedder.sharedInstance().setDelegate(nativeScriptPresenter)
        
        view.addSubview(vStackView)
                
        NSLayoutConstraint.activate([
            vStackView.bottomAnchor.constraint(equalTo: view.safeAreaLayoutGuide.bottomAnchor, constant: -8),
            vStackView.leadingAnchor.constraint(equalTo: view.leadingAnchor, constant: 8),
            vStackView.trailingAnchor.constraint(equalTo: view.trailingAnchor, constant: -8),
            vStackView.centerXAnchor.constraint(equalTo: view.centerXAnchor),
        ])
    }
    
    override func viewDidAppear(_ animated: Bool) {
        super.viewDidAppear(animated)
    }
    
    lazy var vStackView: UIStackView = {
        let buttonVanilla = setupButton(title: "Open Vanilla")
        buttonVanilla.addTarget(self, action: #selector(self.openVanilla), for: UIControl.Event.touchUpInside)
        
        let buttonAngular = setupButton(title: "Open Angular")
        buttonAngular.addTarget(self, action: #selector(self.openAngular), for: UIControl.Event.touchUpInside)
        
        let buttonReact = setupButton(title: "Open React")
        buttonReact.addTarget(self, action: #selector(self.openReact), for: UIControl.Event.touchUpInside)
        
        let buttonSolid = setupButton(title: "Open Solid")
        buttonSolid.addTarget(self, action: #selector(self.openSolid), for: UIControl.Event.touchUpInside)
        
        let buttonSvelte = setupButton(title: "Open Svelte")
        buttonSvelte.addTarget(self, action: #selector(self.openSvelte), for: UIControl.Event.touchUpInside)
        
        let buttonVue = setupButton(title: "Open Vue")
        buttonVue.addTarget(self, action: #selector(self.openVue), for: UIControl.Event.touchUpInside)
    
        let stackView = UIStackView(arrangedSubviews: [buttonVanilla, buttonAngular, buttonReact, buttonSolid, buttonSvelte, buttonVue])
        
        stackView.translatesAutoresizingMaskIntoConstraints = false
        stackView.axis = .vertical
        stackView.distribution = .fillProportionally
        stackView.spacing = 20
        return stackView
    }()
    
    @IBAction func openVanilla(_ sender: Any) {
        self.setupNativeScript(appFolder: "app")
    }
    
    @IBAction func openAngular(_ sender: Any) {
        self.setupNativeScript(appFolder: "angular")
    }
    
    @IBAction func openReact(_ sender: Any) {
        self.setupNativeScript(appFolder: "react")
    }
    
    @IBAction func openSolid(_ sender: Any) {
        self.setupNativeScript(appFolder: "solid")
    }
    
    @IBAction func openSvelte(_ sender: Any) {
        self.setupNativeScript(appFolder: "svelte")
    }
    
    @IBAction func openVue(_ sender: Any) {
        self.setupNativeScript(appFolder: "vue")
    }
    
    func setupNativeScript(appFolder: String?) {
        DispatchQueue.global(qos: .userInitiated).async {
            // init the NativeScript v8 instance on background thread
            let config = Config()
            config.logToSystemConsole = true
            config.baseDir = Bundle.main.resourcePath
            config.applicationPath = appFolder
            let ns = NativeScript(config: config)
            
            // run the NativeScript app on the ui thread
            DispatchQueue.main.async {
                ns?.runMainApplication();
            }
            
            // Alternatively, the following demonstrates just the versatile JavaScript engine
//            ns?.run("console.log('Hello all you good peoples!')", runLoop: false)
//
//            let jsStringExample = """
//            const stringReverse = str => str.split("").reverse().join("");
//
//            console.log(stringReverse("tpircSavaJ ot emocleW"));
//            """
//            ns?.run(jsStringExample, runLoop: false)
//
//            let jsMathLogic = """
//            const pi = 3.14;
//
//            const surface = 4 * pi * 3390 * 3390;
//
//            console.log(`Surface area of Mars is: ${surface}`);
//            """
//            ns?.run(jsMathLogic, runLoop: false)
//
//            let jsRandomHexColor = """
//            const hexColor = () => "#" + Math.floor(Math.random() * 0xffffff).toString(16).padEnd(6, '0');
//
//            console.log(`Random hex color: ${hexColor()}`);
//            """
//            ns?.run(jsRandomHexColor, runLoop: false)
//
//            let jsDayDiff = """
//            const dayDif = (date1, date2) => Math.ceil(Math.abs(date1.getTime() - date2.getTime()) / 86400000);
//
//            dayDif(new Date("2023-02-14"), new Date("2023-02-16"));
//            """
//            ns?.run(jsDayDiff, runLoop: false)
//
//            let jsArrays = """
//            const average = arr => arr.reduce((a, b) => a + b) / arr.length;
//
//            console.log(`Average is: ${average([21, 56, 23, 122, 67])}`);
//            """
//            ns?.run(jsArrays, runLoop: false)
//
//            let jsUsingNativeScript = """
//            console.log(UIApplication.sharedApplication);
//            """
//            ns?.run(jsUsingNativeScript, runLoop: false)
//
//
//            DispatchQueue.main.async {
//                // do NativeScript on the UI thread like showing a platform alert
//                let jsUsingNativeScriptAlert = """
//                const alertController = UIAlertController.alertControllerWithTitleMessagePreferredStyle('Oh Hi!', `Well this is interesting isn't it?`, UIAlertControllerStyle.Alert);
//                alertController.addAction(
//                    UIAlertAction.actionWithTitleStyleHandler('Yes, it sure is.', UIAlertActionStyle.Default, () => {
//                        console.log('alert dismissed.');
//                    })
//                );
//                const viewController = UIApplication.sharedApplication.keyWindow.rootViewController;
//                viewController.presentModalViewControllerAnimated(alertController, true);
//                """
//                ns?.run(jsUsingNativeScriptAlert, runLoop: false)
//            }
        }
    }
    
    func setupButton(title: String) -> UIButton {
        let btn = UIButton(type: .system)
        btn.titleLabel?.font = UIFont(name: "Helvetica", size: 20)
        btn.layer.cornerRadius = 30
        btn.contentEdgeInsets = UIEdgeInsets(
          top: 20,
          left: 20,
          bottom: 20,
          right: 20
        )
        btn.frame = CGRectMake(0, 0, 175, 100)
        btn.center = self.view.center
        btn.setTitle(title, for: .normal)
        btn.setTitleColor(.white, for: .normal)
        switch title {
        case "Open Vanilla":
            btn.backgroundColor = UIColor(red: 0.40, green: 0.68, blue: 0.95, alpha: 1.00)
        case "Open Angular":
            btn.backgroundColor = UIColor(red: 0.74, green: 0.17, blue: 0.22, alpha: 1.00)
        case "Open React":
            btn.backgroundColor = UIColor(red: 0.27, green: 0.71, blue: 0.87, alpha: 1.00)
        case "Open Solid":
            btn.backgroundColor = UIColor(red: 0.27, green: 0.42, blue: 0.62, alpha: 1.00)
        case "Open Svelte":
            btn.backgroundColor = UIColor(red: 0.92, green: 0.31, blue: 0.15, alpha: 1.00)
        case "Open Vue":
            btn.backgroundColor = UIColor(red: 0.39, green: 0.72, blue: 0.53, alpha: 1.00)
        default:
            btn.backgroundColor = .systemPink
        }
        
        return btn
    }
}
