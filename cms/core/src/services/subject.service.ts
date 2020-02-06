import { Subject } from 'rxjs';

import { Page } from '../models/page.model';
import { Block } from '../models/block.model';
import { Media } from '../models/media.model';

export class SubjectService {

  blockFolderCreated$: Subject<Block> = new Subject<Block>();
  mediaFolderCreated$: Subject<Media> = new Subject<Media>();
  pageCreated$: Subject<Page> = new Subject<Page>();
  pageSelected$: Subject<Page> = new Subject<Page>();

  fireBlockFolderCreated(createdBlockFolder: Block) {
    this.blockFolderCreated$.next(createdBlockFolder);
  }

  fireMediaFolderCreated(createdMediaFolder: Media) {
    this.mediaFolderCreated$.next(createdMediaFolder);
  }

  firePageCreated(createdPage: Page) {
    this.pageCreated$.next(createdPage);
  }

  firePageSelected(selectedPage: Page) {
    this.pageSelected$.next(selectedPage);
  }
}
