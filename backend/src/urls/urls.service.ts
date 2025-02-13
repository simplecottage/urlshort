import { Injectable } from '@nestjs/common';
import { nanoid } from 'nanoid';

@Injectable()
export class UrlsService {
  private urls = new Map<string, string>();

  async shorten(originalUrl: string) {
    const id = nanoid(6); // 6 character short id
    this.urls.set(id, originalUrl);
    return `http://localhost:3001/urls/${id}`;
  }

  async getOriginalUrl(id: string) {
    return this.urls.get(id);
  }
}
