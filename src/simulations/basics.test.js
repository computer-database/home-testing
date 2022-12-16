import { sleep, group } from 'k6'
import Computers from '../requests/computers.request'

export const options = {
  stages: [
    { duration: '10s', target: 5 },
    { duration: '30s', target: 10 },
    { duration: '15s', target: 0 },
  ],
  thresholds: {
    http_req_duration: ['p(99)<1500'],
  },
}

export default function main() {
  let computers = new Computers()
  group('A user arrives at the application', function () {
    computers.list()
  })

  group('The user searches for macbook', function () {
    computers.search('macbook')
  })

  group('The user opens one of the related models', function () {
    computers.open(6)
  })

  group('The user goes back to home page', function () {
    computers.list()
  })

  group('The user iterates through pages', function () {
      computers.page(1)
      computers.page(2)
      computers.page(3)
  })  

  group('The user creates a new model', function () {
    let computer = {
      name: 'Alienware',
      introduced: '2022-12-12',
      discontinued: '2023-12-12',
      company: '5',
    }
    computers.new()
    computers.create(computer)
    computers.list()
  })

  sleep(1)
}
