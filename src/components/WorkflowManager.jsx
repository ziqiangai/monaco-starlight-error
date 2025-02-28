// src/components/WorkflowManager.jsx
import { useEffect, useState } from 'react';
import './WorkflowManager.css'; // 引入样式文件

import Editor from '@monaco-editor/react';

const WorkflowManager = () => {
    const [workflows, setWorkflows] = useState([ {
        "id" : "1",
        "name" : "图片放大跟随分辨率",
        "templateId" : "4df2efa0f18d46dc9758803e478eb51c",
        "paramsSchema" : {
          "image" : {
            "type" : "string",
            "default" : "https://liblibai-tmp-image.liblib.cloud/img/081e9f07d9bd4c2ba090efde163518f9/5fae2d9099c208487bc97867bece2bf3d904068e307c7bd30c646c9f3059af33.png",
            "description" : "图片地址"
          },
          "width" : {
            "type" : "integer",
            "default" : 2048,
            "description" : "新图宽度"
          },
          "height" : {
            "type" : "integer",
            "default" : 2048,
            "description" : "新图高度"
          }
        },
        "paramsTemplate" : {
          "30" : {
            "class_type" : "LoadImage",
            "inputs" : {
              "image" : "${image}"
            }
          },
          "31" : {
            "class_type" : "ImageScale",
            "inputs" : {
              "width" : "${width}",
              "height" : "${height}"
            }
          },
          "workflowUuid" : "fa2e042e32fa4aabbbacc255b4ab2cca"
        },
        "jsonSchema" : {
          "type" : "object",
          "properties" : {
            "30" : {
              "type" : "object",
              "properties" : {
                "class_type" : {
                  "type" : "string",
                  "enum" : [ "LoadImage" ]
                },
                "inputs" : {
                  "type" : "object",
                  "properties" : {
                    "image" : {
                      "type" : "string"
                    }
                  },
                  "required" : [ "image" ]
                }
              },
              "required" : [ "class_type", "inputs" ]
            },
            "31" : {
              "type" : "object",
              "properties" : {
                "class_type" : {
                  "type" : "string",
                  "enum" : [ "ImageScale" ]
                },
                "inputs" : {
                  "type" : "object",
                  "properties" : {
                    "width" : {
                      "type" : "integer"
                    },
                    "height" : {
                      "type" : "integer"
                    }
                  },
                  "required" : [ "width", "height" ]
                }
              },
              "required" : [ "class_type", "inputs" ]
            },
            "workflowUuid" : {
              "type" : "string",
              "const" : "fa2e042e32fa4aabbbacc255b4ab2cca"
            }
          },
          "required" : [ "30", "31", "workflowUuid" ],
          "additionalProperties" : false
        }
      }, {
        "id" : "2",
        "name" : "粗糙的照片变线稿",
        "templateId" : "4df2efa0f18d46dc9758803e478eb51c",
        "paramsSchema" : {
          "image" : {
            "type" : "string",
            "default" : "https://liblibai-tmp-image.liblib.cloud/img/f78b5f7987e04dfc8953816ad6028bcf/709c9e13fa7e9986a64560a40187f513bae5361fe133c55590bf22b9e8e5986e.png",
            "description" : "图片地址"
          },
          "resolution" : {
            "type" : "integer",
            "default" : 512,
            "description" : "自定义参数"
          }
        },
        "paramsTemplate" : {
          "11" : {
            "class_type" : "LoadImage",
            "inputs" : {
              "image" : "#{image}"
            }
          },
          "12" : {
            "class_type" : "LineArtPreprocessor",
            "inputs" : {
              "resolution" : "#{resolution}"
            }
          },
          "workflowUuid" : "031181c936bf4750b9765c5b59136b64"
        },
        "jsonSchema" : {
          "type" : "object",
          "properties" : {
            "11" : {
              "type" : "object",
              "properties" : {
                "class_type" : {
                  "type" : "string"
                },
                "inputs" : {
                  "type" : "object",
                  "properties" : {
                    "image" : {
                      "type" : "string",
                      "format" : "uri"
                    }
                  },
                  "required" : [ "image" ]
                }
              },
              "required" : [ "class_type", "inputs" ]
            },
            "12" : {
              "type" : "object",
              "properties" : {
                "class_type" : {
                  "type" : "string"
                },
                "inputs" : {
                  "type" : "object",
                  "properties" : {
                    "resolution" : {
                      "type" : "integer",
                      "minimum" : 1
                    }
                  },
                  "required" : [ "resolution" ]
                }
              },
              "required" : [ "class_type", "inputs" ]
            },
            "workflowUuid" : {
              "type" : "string",
              "const" : "fa2e042e32fa4aabbbacc255b4ab2cca"
            }
          },
          "required" : [ "11", "12", "workflowUuid" ]
        }
      }, {
        "id" : "3",
        "name" : "智能扣图",
        "templateId" : "4df2efa0f18d46dc9758803e478eb51c",
        "paramsSchema" : {
          "image" : {
            "type" : "string",
            "default" : "https://liblibai-tmp-image.liblib.cloud/img/f78b5f7987e04dfc8953816ad6028bcf/709c9e13fa7e9986a64560a40187f513bae5361fe133c55590bf22b9e8e5986e.png",
            "description" : "图片地址"
          }
        },
        "paramsTemplate" : {
          "10" : {
            "class_type" : "LoadImage",
            "inputs" : {
              "image" : "#{image}"
            }
          },
          "workflowUuid" : "4bdcee1aad58492180a218a0b56edf60"
        },
        "jsonSchema" : {
          "type" : "object",
          "properties" : {
            "10" : {
              "type" : "object",
              "properties" : {
                "class_type" : {
                  "type" : "string",
                  "enum" : [ "LoadImage" ]
                },
                "inputs" : {
                  "type" : "object",
                  "properties" : {
                    "image" : {
                      "type" : "string"
                    }
                  },
                  "required" : [ "image" ]
                }
              },
              "required" : [ "class_type", "inputs" ]
            },
            "workflowUuid" : {
              "type" : "string",
              "const" : "4bdcee1aad58492180a218a0b56edf60"
            }
          },
          "required" : [ "10", "workflowUuid" ]
        }
      } ]);
    const [editingWorkflow, setEditingWorkflow] = useState(null);
    const [newWorkflowName, setNewWorkflowName] = useState('');
    const [isEditing, setIsEditing] = useState(false);

    const baseUrl = import.meta.env.PUBLIC_SERVER;

    // 获取工作流列表
    const fetchWorkflows = async () => {
        try {
            const response = await fetch(`${baseUrl}/api/workflow/list`);
            const data = await response.json();
            if (data.success) {
                data.data.forEach(element => {
                    element.content = JSON.stringify(element, null, 2);
                });
                setWorkflows(data.data);
            } else {
                console.error('获取工作流列表失败:', data.message);
            }
        } catch (error) {
            console.error('请求失败:', error);
        }
    };

    // 删除工作流
    const deleteWorkflow = async (id) => {
        try {
            const response = await fetch(`${baseUrl}/api/workflow/${id}`, {
                method: 'DELETE',
            });
            const data = await response.json();
            if (data.success) {
                fetchWorkflows(); // 重新获取工作流列表
            } else {
                console.error('删除工作流失败:', data.message);
            }
        } catch (error) {
            console.error('请求失败:', error);
        }
    };

    // 新增工作流
    const addWorkflow = async () => {
        try {
            const response = await fetch(`${baseUrl}/api/workflow/add`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name: newWorkflowName }), // 假设工作流对象有一个 name 属性
            });
            const data = await response.json();
            if (data.success) {
                setNewWorkflowName(''); // 清空输入框
                setIsEditing(false);
                fetchWorkflows(); // 重新获取工作流列表
            } else {
                console.error('新增工作流失败:', data.message);
            }
        } catch (error) {
            console.error('请求失败:', error);
        }
    };

    // 修改工作流
    const updateWorkflow = async (id) => {
        let workflow = workflows.find((item) => {
            return item.id == id;
        });
        if(!workflow){
            return;
        }
        try {
            workflow = JSON.parse(workflow.content);
            const response = await fetch(`${baseUrl}/api/workflow/update`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(workflow),
            });
            const data = await response.json();
            if (data.success) {
                fetchWorkflows(); // 重新获取工作流列表
            } else {
                console.error('修改工作流失败:', data.message);
            }
        } catch (error) {
            console.error('请求失败:', error);
        }
    };

    const updateItemWorkflow = (id, content) => {
        setWorkflows(workflows.map(item => 
            item.id === id ? { ...item, content } : item // 更新目标项，保持其他项不变
          ));
    }

    useEffect(() => {
        fetchWorkflows();
    }, []);

    return (
        <div className="workflow-manager">
            <div style={{ display: 'flex', flexDirection: 'row' }}>
                <button onClick={() => { setIsEditing(true); }}>新增工作流</button>
                <div style={{ flex: 1 }}></div>
                {isEditing && (
                    <div>
                        <input
                            type="text"
                            value={newWorkflowName}
                            onChange={(e) => setNewWorkflowName(e.target.value)}
                            placeholder="输入新工作流名称"
                        />
                        <button onClick={addWorkflow}>确认</button>
                        <button onClick={()=>{setIsEditing(false)}}>取消</button>
                    </div>
                )}
            </div>
            
            <ul className="workflow-list">
                {workflows.map((workflow) => (
                    <li key={workflow.id} className="workflow-item">
                        <div style={{ display: 'flex', flexDirection: 'row' }}>
                            <div className="workflow-item-name">{workflow.name}</div>
                            <div style={{ flex: 1 }}></div>
                            <button onClick={() => updateWorkflow(workflow.id)}>保存</button>
                            <button onClick={() => deleteWorkflow(workflow.id)}>删除</button>
                        </div>
                        <div style={{ position:'relative',border: '2px solid #ccc', borderRadius: '8px', padding: '8px' }}>
                            <Editor
                                height="300px"
                                defaultLanguage="json"  // 设置语言为 JSON
                                defaultValue={workflow.content}
                                onChange={(e) => updateItemWorkflow(workflow.id, e)}
                                theme="vs-light"
                                options={{
                                    automaticLayout: true,  // 自动布局
                                    minimap: { enabled: false },  // 禁用小地图
                                }}
                            />
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export { WorkflowManager };

