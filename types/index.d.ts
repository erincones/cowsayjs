/**
 * Cow template
 */
declare module "*.cow" {
  /**
   * Cow name
   */
  export const name: string;

  /**
   * Renderer function
   *
   *
   * @callback CowRenderer
   * @param action Action
   * @param eyes Eyes
   * @param tongue Tongue
   * @returns Final cow
   */
  export const render: (action?: string, eyes?: string, tongue?: string) => string;
}
