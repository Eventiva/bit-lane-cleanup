import * as core from '@actions/core'
import { context } from '@actions/github'
import run from './scripts/lane-cleanup'

try {
  const wsDir: string = process.env.WSDIR!
  const prNumber = context?.payload?.pull_request?.number

  if (!prNumber) {
    throw new Error('Pull Request number is not found')
  }

  const laneName = `pr-${prNumber?.toString()}`
  run(laneName, wsDir)
} catch (error) {
  core.setFailed((error as Error).message)
}
