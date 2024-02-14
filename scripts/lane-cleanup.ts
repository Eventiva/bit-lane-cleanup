import { exec } from '@actions/exec'

const run = async (laneName: string, wsdir: string): Promise<void> => {
  const org = process.env.ORG
  const scope = process.env.SCOPE

  try {
    await exec(
      `bit lane remove ${org}.${scope}/${laneName} --remote --silent --force`,
      [],
      { cwd: wsdir }
    )
  } catch (error) {
    console.log(`Cannot remove bit lane: ${error}. Lane may not exist`)
  }
}

export default run
