import { Controller, Post, Get, Body, Param, Redirect } from '@nestjs/common';
import { UrlsService } from './urls.service';

@Controller('urls')
export class UrlsController {
  constructor(private urlsService: UrlsService) {}

  @Post('shorten')
  async shorten(@Body('originalUrl') originalUrl: string) {
    const shortUrl = await this.urlsService.shorten(originalUrl);
    return { shortUrl };
  }

  @Get(':id')
  @Redirect()
  async redirect(@Param('id') id: string) {
    const url = await this.urlsService.getOriginalUrl(id);
    return { url };
  }
}
