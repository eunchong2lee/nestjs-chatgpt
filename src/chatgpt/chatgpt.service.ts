import { BadRequestException, Injectable } from '@nestjs/common';
import { Configuration, OpenAIApi } from 'openai';
// https://platform.openai.com/docs/api-reference/edits/create?lang=node.js
@Injectable()
export class ChatgptService {
  async postGpt() {
    try {
      console.log(1);
      console.log(process.env.OPENAI_API_KEY);
      const configuration = new Configuration({
        organization: 'org-CvJTsDoRHFLuxMSme5SvpNba',
        apiKey: process.env.OPENAI_API_KEY,
      });
      console.log(2);
      const openai = new OpenAIApi(configuration);
      console.log(3);
      const completion = await openai.createChatCompletion({
        model: 'gpt-3.5-turbo',
        messages: [{ role: 'user', content: 'Hello world' }],
      });
      console.log(completion.data.choices[0].message);

      //   const response = await openai.listEngines();
      //   console.log(response);
      return 'hello';
    } catch (err) {
      throw new BadRequestException(err.response);
    }
  }
}
