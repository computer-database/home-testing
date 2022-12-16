import {check} from 'k6';
import http from 'k6/http';

export default class Computers {

  constructor() {
    this.params = {
        headers: {
          accept:
            'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
          'accept-encoding': 'gzip, deflate, br',
          'accept-language': 'en-US,en;q=0.9',
          'cache-control': 'max-age=0',
          'sec-ch-ua': '"Not?A_Brand";v="8", "Chromium";v="108"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
          'sec-fetch-dest': 'document',
          'sec-fetch-mode': 'navigate',
          'sec-fetch-site': 'none',
          'sec-fetch-user': '?1',
          'upgrade-insecure-requests': '1',
          'user-agent':
            'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36',
        },
      }
  }

  list() {
    let response = http.get('https://computer-database.gatling.io/computers/', this.params)
    check(response, {
      'is status 200': () => response.status === 200,
    });
  }

  new() {
    let response = http.get('https://computer-database.gatling.io/computers/new', this.params)
    check(response, {
      'is status 200': () => response.status === 200,
    });
  }

  create(computer) {
    let response = http.post('https://computer-database.gatling.io/computers', computer, this.params)
    check(response, {
      'is status 200': () => response.status === 200,
    });
  }


  page(number) {
    let response = http.get(`https://computer-database.gatling.io/computers?p=${number}&n=10&s=name&d=asc`, this.params)
    check(response, {
      'is status 200': () => response.status === 200,
    });
  }

  open(computerId) {
    let response = http.get(`https://computer-database.gatling.io/computers/${computerId}`, this.params)
    check(response, {
      'is status 200': () => response.status === 200,
    });
  }

  search(computerName) {
    let response = http.get(`https://computer-database.gatling.io/computers?f=${computerName}`, this.params)
    check(response, {
      'is status 200': () => response.status === 200,
    });
  }
}
