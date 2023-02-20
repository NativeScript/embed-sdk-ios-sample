//
//  NativeScriptPresenter.swift
//  MyCoolApp
//
//  Created by MyTeam on 2/16/23.
//

import UIKit
import NativeScriptSDK

public class NativeScriptPresenter: NSObject, NativeScriptEmbedderDelegate {
    var vc: UIViewController?
    
    public func presentNativeScriptApp(_ vc: UIViewController!) -> Any! {
        vc.view.backgroundColor = UIColor.white
        self.vc?.present(vc, animated: true)
        return vc;
    }
}
