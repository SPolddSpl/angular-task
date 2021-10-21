import { Injectable } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalService } from 'ng-zorro-antd/modal';

@Injectable({
  providedIn: 'root'
})

//Litte service for feedback users of their actions in dashboard (still in progress)
export class ToastService {

  constructor(private message: NzMessageService, private modal: NzModalService) { }

  createToast(type: string, message: string) {
    this.message.create(type, message);
  }



}
