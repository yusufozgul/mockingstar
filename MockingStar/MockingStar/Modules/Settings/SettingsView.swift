//
//  SettingsView.swift
//  MockingStar
//
//  Created by Yusuf Özgül on 16.10.2023.
//

import SwiftUI
import CommonKit

struct SettingsView: View {
    @Bindable private var viewModel = SettingsViewModel()
    @State private var isFileImporting: Bool = false

    var body: some View {
        Form {
            LabeledContent("Mocks Folder") {
                HStack {
                    Text(viewModel.mockFolderFilePath)
                    Spacer()

                    Button("Change Path") {
                        isFileImporting = true
                    }
                }
            }

            TextField("Server Port", value: $viewModel.httpServerPort, format: .port(), prompt: Text("Server Port"))

            LabeledContent("Diagnostic") {
                DiagnosticView()
            }

            Spacer()
        }
        .padding()
        .fileImporter(isPresented: $isFileImporting, allowedContentTypes: [.folder], allowsMultipleSelection: false) { result in
            viewModel.fileImported(result: result)
        }
    }
}

#Preview {
    SettingsView()
}
