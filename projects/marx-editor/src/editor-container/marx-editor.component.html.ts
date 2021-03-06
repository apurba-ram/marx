const template = `<div class="editor-container" (blur)="blur()" #editorContainer>
                        <div class="editable-block" contenteditable="true"
                            [class.bottom]="!editorConfig?.toolbarPlacement || editorConfig?.toolbarPlacement === 'bottom'"
                            [class.top]="editorConfig?.toolbarPlacement === 'top'" [id]="id" (input)="setValue($event.target.innerText)"
                            (paste)="onPaste($event)" [mentionConfig]="mentionConfig" (closed)="mentionClosed()"
                            [attr.placeholder]="editorConfig?.placeholder" [class.collapsible]="editorConfig?.isCollapsible" [class.active]="isCollapsible">
                        </div>
                        <div class="editor-tools"
                            [class.bottom]="!editorConfig?.toolbarPlacement || editorConfig?.toolbarPlacement === 'bottom'"
                            [class.top]="editorConfig?.toolbarPlacement === 'top'">
                            <app-editor-menu (linkInEditor)="toolbarClicked($event)" (imageInEditor)="saveImage($event)"
                                (sendSavedFiles)="saveFiles($event)" (buttonClick)="toolbarClicked($event)" [toolbarConfig]="toolbarConfig"
                                [editorConfig]="editorConfig" [moreOptionsButton]="moreOptionsButton" (menuLeftWidth)="getmenuLeftWidth($event)"></app-editor-menu>
                        </div>
                 </div>`;
export default template;