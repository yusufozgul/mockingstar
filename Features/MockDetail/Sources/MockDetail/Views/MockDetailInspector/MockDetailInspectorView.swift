//
//  MockDetailInspectorView.swift
//  MockingStar
//
//  Created by Yusuf Özgül on 21.09.2023.
//

import CommonKit
import CommonViewsKit
import SwiftUI

struct MockDetailInspectorView: View {
    @Bindable var viewModel: MockDetailInspectorViewModel

    var body: some View {
        Form {
            Section("Overview") {
                LabeledContent("URL", value: viewModel.mockModel.metaData.url.absoluteString)
                LabeledContent("Path", value: viewModel.mockModel.metaData.url.path())
                LabeledContent("Query", value: viewModel.mockModel.metaData.url.query() ?? "")
            }

            Section("Mock State") {
                LabeledContent("Is Modified", value: viewModel.mockModel.metaData.appendTime == viewModel.mockModel.metaData.updateTime ? "No" : "Yes")

                TextField("Mock Scenario", text: $viewModel.scenario, prompt: Text("Enter a scenario"), axis: .vertical)
                    .lineLimit(1...10)
                TextField("HTTP Status", value: $viewModel.httpStatus, format: .httpStatus(), prompt: Text("HTTP Status Code"))

                LabeledContent("Append Date", value: viewModel.mockModel.metaData.appendTime, format: .dateTime)

                if viewModel.mockModel.metaData.appendTime != viewModel.mockModel.metaData.updateTime {
                    LabeledContent("Update Date", value: viewModel.mockModel.metaData.updateTime, format: .dateTime)
                }

                VStack(alignment: .leading) {
                    Text("Response Time")
                    Slider(value: $viewModel.responseTime, in: 0.0...30.0) {
                        TextField(String(), value: $viewModel.responseTime, format: .number.precision(.fractionLength(2)), prompt: Text("Response Time (Second)"))
                    }
                }
            }

            Section("Plugin") {
                ForEach(viewModel.pluginMessages, id: \.self) { message in
                    Text(LocalizedStringKey(message))
                        .textSelection(.enabled)
                }

                Button("Reload") {
                    Task { @MainActor in
                        await viewModel.loadPluginMessage()
                    }
                }
            }
        }
        .inspectorColumnWidth(min: 300, ideal: 400)
        .task(id: viewModel.httpStatus) { viewModel.sync() }
        .task(id: viewModel.scenario) { viewModel.sync() }
        .task(id: viewModel.responseTime) { viewModel.sync() }
        .task { await viewModel.loadPluginMessage() }
    }
}

#Preview {
    MockDetailInspectorView(viewModel: .init(mockDomain: "Dev",
                                             mockModel: MockModel(metaData: .init(url: URL(string: "https://www.trendyol.com/aboutus")!,
                                                                                  method: "GET",
                                                                                  appendTime: .init(),
                                                                                  updateTime: .init(),
                                                                                  httpStatus: 200,
                                                                                  responseTime: 0.15,
                                                                                  scenario: "",
                                                                                  id: "9271C0BE-9326-443F-97B8-1ECA29571FC3"),
                                                                  requestHeader: "",
                                                                  responseHeader: "",
                                                                  requestBody: "",
                                                                  responseBody: ""),
                                             onChange: {}))
}
