//
//  File.swift
//  
//
//  Created by Yusuf Özgül on 5.12.2023.
//

import Foundation
#if canImport(FoundationNetworking)
import FoundationNetworking
#endif

public protocol URLSessionInterface {
    func data(for request: URLRequest) async throws -> (Data, URLResponse)
}

extension URLSession: URLSessionInterface {}
