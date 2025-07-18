import { unknownIcon } from '../../rendering-util/icons.js';
import type { IconifyJSON } from '@iconify/types';

const wrapIcon = (icon: string) => {
  return `<g><rect width="80" height="80" style="fill: #087ebf; stroke-width: 0px;"/>${icon}</g>`;
};

export const architectureIcons: IconifyJSON = {
  prefix: 'mermaid-architecture',
  height: 80,
  width: 80,
  icons: {
    database: {
      body: wrapIcon(
        '<path id="b" data-name="4" d="m20,57.86c0,3.94,8.95,7.14,20,7.14s20-3.2,20-7.14" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><path id="c" data-name="3" d="m20,45.95c0,3.94,8.95,7.14,20,7.14s20-3.2,20-7.14" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><path id="d" data-name="2" d="m20,34.05c0,3.94,8.95,7.14,20,7.14s20-3.2,20-7.14" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><ellipse id="e" data-name="1" cx="40" cy="22.14" rx="20" ry="7.14" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><line x1="20" y1="57.86" x2="20" y2="22.14" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><line x1="60" y1="57.86" x2="60" y2="22.14" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/>'
      ),
    },
    server: {
      body: wrapIcon(
        '<rect x="17.5" y="17.5" width="45" height="45" rx="2" ry="2" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><line x1="17.5" y1="32.5" x2="62.5" y2="32.5" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><line x1="17.5" y1="47.5" x2="62.5" y2="47.5" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><g><path d="m56.25,25c0,.27-.45.5-1,.5h-10.5c-.55,0-1-.23-1-.5s.45-.5,1-.5h10.5c.55,0,1,.23,1,.5Z" style="fill: #fff; stroke-width: 0px;"/><path d="m56.25,25c0,.27-.45.5-1,.5h-10.5c-.55,0-1-.23-1-.5s.45-.5,1-.5h10.5c.55,0,1,.23,1,.5Z" style="fill: none; stroke: #fff; stroke-miterlimit: 10;"/></g><g><path d="m56.25,40c0,.27-.45.5-1,.5h-10.5c-.55,0-1-.23-1-.5s.45-.5,1-.5h10.5c.55,0,1,.23,1,.5Z" style="fill: #fff; stroke-width: 0px;"/><path d="m56.25,40c0,.27-.45.5-1,.5h-10.5c-.55,0-1-.23-1-.5s.45-.5,1-.5h10.5c.55,0,1,.23,1,.5Z" style="fill: none; stroke: #fff; stroke-miterlimit: 10;"/></g><g><path d="m56.25,55c0,.27-.45.5-1,.5h-10.5c-.55,0-1-.23-1-.5s.45-.5,1-.5h10.5c.55,0,1,.23,1,.5Z" style="fill: #fff; stroke-width: 0px;"/><path d="m56.25,55c0,.27-.45.5-1,.5h-10.5c-.55,0-1-.23-1-.5s.45-.5,1-.5h10.5c.55,0,1,.23,1,.5Z" style="fill: none; stroke: #fff; stroke-miterlimit: 10;"/></g><g><circle cx="32.5" cy="25" r=".75" style="fill: #fff; stroke: #fff; stroke-miterlimit: 10;"/><circle cx="27.5" cy="25" r=".75" style="fill: #fff; stroke: #fff; stroke-miterlimit: 10;"/><circle cx="22.5" cy="25" r=".75" style="fill: #fff; stroke: #fff; stroke-miterlimit: 10;"/></g><g><circle cx="32.5" cy="40" r=".75" style="fill: #fff; stroke: #fff; stroke-miterlimit: 10;"/><circle cx="27.5" cy="40" r=".75" style="fill: #fff; stroke: #fff; stroke-miterlimit: 10;"/><circle cx="22.5" cy="40" r=".75" style="fill: #fff; stroke: #fff; stroke-miterlimit: 10;"/></g><g><circle cx="32.5" cy="55" r=".75" style="fill: #fff; stroke: #fff; stroke-miterlimit: 10;"/><circle cx="27.5" cy="55" r=".75" style="fill: #fff; stroke: #fff; stroke-miterlimit: 10;"/><circle cx="22.5" cy="55" r=".75" style="fill: #fff; stroke: #fff; stroke-miterlimit: 10;"/></g>'
      ),
    },
    disk: {
      body: wrapIcon(
        '<rect x="20" y="15" width="40" height="50" rx="1" ry="1" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><ellipse cx="24" cy="19.17" rx=".8" ry=".83" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><ellipse cx="56" cy="19.17" rx=".8" ry=".83" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><ellipse cx="24" cy="60.83" rx=".8" ry=".83" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><ellipse cx="56" cy="60.83" rx=".8" ry=".83" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><ellipse cx="40" cy="33.75" rx="14" ry="14.58" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><ellipse cx="40" cy="33.75" rx="4" ry="4.17" style="fill: #fff; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><path d="m37.51,42.52l-4.83,13.22c-.26.71-1.1,1.02-1.76.64l-4.18-2.42c-.66-.38-.81-1.26-.33-1.84l9.01-10.8c.88-1.05,2.56-.08,2.09,1.2Z" style="fill: #fff; stroke-width: 0px;"/>'
      ),
    },
    internet: {
      body: wrapIcon(
        '<circle cx="40" cy="40" r="22.5" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><line x1="40" y1="17.5" x2="40" y2="62.5" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><line x1="17.5" y1="40" x2="62.5" y2="40" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><path d="m39.99,17.51c-15.28,11.1-15.28,33.88,0,44.98" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><path d="m40.01,17.51c15.28,11.1,15.28,33.88,0,44.98" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><line x1="19.75" y1="30.1" x2="60.25" y2="30.1" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><line x1="19.75" y1="49.9" x2="60.25" y2="49.9" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/>'
      ),
    },
    cloud: {
      body: wrapIcon(
        '<path d="m65,47.5c0,2.76-2.24,5-5,5H20c-2.76,0-5-2.24-5-5,0-1.87,1.03-3.51,2.56-4.36-.04-.21-.06-.42-.06-.64,0-2.6,2.48-4.74,5.65-4.97,1.65-4.51,6.34-7.76,11.85-7.76.86,0,1.69.08,2.5.23,2.09-1.57,4.69-2.5,7.5-2.5,6.1,0,11.19,4.38,12.28,10.17,2.14.56,3.72,2.51,3.72,4.83,0,.03,0,.07-.01.1,2.29.46,4.01,2.48,4.01,4.9Z" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/>'
      ),
    },
    unknown: unknownIcon,
    blank: {
      body: wrapIcon(''),
    },
    // AWS Icons
    lambda: {
      body: wrapIcon(
        '<path d="M20,40 L30,20 L40,40 L50,20 L60,40 M25,50 L45,50 M15,30 L65,30" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><rect x="25" y="35" width="30" height="20" rx="2" ry="2" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/>'
      ),
    },
    s3: {
      body: wrapIcon(
        '<rect x="15" y="25" width="50" height="30" rx="3" ry="3" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><line x1="15" y1="35" x2="65" y2="35" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><line x1="15" y1="45" x2="65" y2="45" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><circle cx="22" cy="30" r="1.5" style="fill: #fff; stroke: #fff; stroke-miterlimit: 10;"/><circle cx="22" cy="40" r="1.5" style="fill: #fff; stroke: #fff; stroke-miterlimit: 10;"/><circle cx="22" cy="50" r="1.5" style="fill: #fff; stroke: #fff; stroke-miterlimit: 10;"/>'
      ),
    },
    ec2: {
      body: wrapIcon(
        '<rect x="15" y="20" width="50" height="40" rx="2" ry="2" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><rect x="20" y="25" width="40" height="15" rx="1" ry="1" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 1px;"/><circle cx="25" cy="48" r="2" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 1px;"/><circle cx="40" cy="48" r="2" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 1px;"/><circle cx="55" cy="48" r="2" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 1px;"/>'
      ),
    },
    rds: {
      body: wrapIcon(
        '<ellipse cx="40" cy="30" rx="22" ry="8" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><ellipse cx="40" cy="45" rx="22" ry="8" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><line x1="18" y1="30" x2="18" y2="45" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><line x1="62" y1="30" x2="62" y2="45" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/>'
      ),
    },
    dynamodb: {
      body: wrapIcon(
        '<rect x="15" y="25" width="50" height="30" rx="2" ry="2" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><circle cx="25" cy="35" r="3" style="fill: #fff; stroke: #fff; stroke-miterlimit: 10;"/><circle cx="40" cy="35" r="3" style="fill: #fff; stroke: #fff; stroke-miterlimit: 10;"/><circle cx="55" cy="35" r="3" style="fill: #fff; stroke: #fff; stroke-miterlimit: 10;"/><line x1="25" y1="42" x2="25" y2="48" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 1px;"/><line x1="40" y1="42" x2="40" y2="48" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 1px;"/><line x1="55" y1="42" x2="55" y2="48" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 1px;"/>'
      ),
    },
    apigateway: {
      body: wrapIcon(
        '<rect x="20" y="25" width="40" height="30" rx="2" ry="2" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><path d="M30,35 L35,30 L35,40 Z M45,30 L50,35 L45,40 Z" style="fill: #fff; stroke: #fff; stroke-miterlimit: 10; stroke-width: 1px;"/><line x1="15" y1="40" x2="20" y2="40" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><line x1="60" y1="40" x2="65" y2="40" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/>'
      ),
    },
    cloudfront: {
      body: wrapIcon(
        '<circle cx="40" cy="40" r="20" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><circle cx="40" cy="40" r="8" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 1px;"/><path d="M25,25 L30,30 M55,25 L50,30 M55,55 L50,50 M25,55 L30,50" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 1px;"/>'
      ),
    },
    elasticache: {
      body: wrapIcon(
        '<rect x="18" y="25" width="44" height="30" rx="15" ry="15" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><circle cx="30" cy="40" r="3" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 1px;"/><circle cx="40" cy="40" r="3" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 1px;"/><circle cx="50" cy="40" r="3" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 1px;"/><path d="M30,30 Q40,25 50,30" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 1px;"/>'
      ),
    },
    elb: {
      body: wrapIcon(
        '<rect x="20" y="25" width="40" height="30" rx="2" ry="2" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><path d="M30,35 L50,35 M35,30 L35,40 M45,30 L45,40" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><circle cx="30" cy="45" r="2" style="fill: #fff; stroke: #fff; stroke-miterlimit: 10;"/><circle cx="40" cy="45" r="2" style="fill: #fff; stroke: #fff; stroke-miterlimit: 10;"/><circle cx="50" cy="45" r="2" style="fill: #fff; stroke: #fff; stroke-miterlimit: 10;"/>'
      ),
    },
    iam: {
      body: wrapIcon(
        '<circle cx="40" cy="30" r="8" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><path d="M30,45 Q40,40 50,45 L50,55 Q40,60 30,55 Z" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><circle cx="37" cy="27" r="1" style="fill: #fff; stroke: #fff; stroke-miterlimit: 10;"/><circle cx="43" cy="27" r="1" style="fill: #fff; stroke: #fff; stroke-miterlimit: 10;"/><path d="M35,32 Q40,35 45,32" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 1px;"/>'
      ),
    },
    kinesis: {
      body: wrapIcon(
        '<path d="M20,25 Q40,15 60,25 L60,35 Q40,45 20,35 Z" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><path d="M20,45 Q40,35 60,45 L60,55 Q40,65 20,55 Z" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><path d="M25,30 L35,30 M30,35 L40,35 M35,40 L45,40" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 1px;"/>'
      ),
    },
    sns: {
      body: wrapIcon(
        '<rect x="20" y="25" width="40" height="30" rx="5" ry="5" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><circle cx="30" cy="35" r="2" style="fill: #fff; stroke: #fff; stroke-miterlimit: 10;"/><circle cx="40" cy="35" r="2" style="fill: #fff; stroke: #fff; stroke-miterlimit: 10;"/><circle cx="50" cy="35" r="2" style="fill: #fff; stroke: #fff; stroke-miterlimit: 10;"/><path d="M25,45 L35,45 M40,45 L50,45 M55,45 L55,45" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 1px;"/>'
      ),
    },
    sqs: {
      body: wrapIcon(
        '<rect x="15" y="30" width="50" height="20" rx="2" ry="2" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><line x1="25" y1="30" x2="25" y2="50" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 1px;"/><line x1="35" y1="30" x2="35" y2="50" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 1px;"/><line x1="45" y1="30" x2="45" y2="50" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 1px;"/><line x1="55" y1="30" x2="55" y2="50" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 1px;"/><path d="M15,35 L10,40 L15,45" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 1px;"/>'
      ),
    },
    vpc: {
      body: wrapIcon(
        '<rect x="15" y="20" width="50" height="40" rx="3" ry="3" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><rect x="20" y="25" width="20" height="15" rx="1" ry="1" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 1px;"/><rect x="45" y="25" width="15" height="15" rx="1" ry="1" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 1px;"/><rect x="20" y="45" width="35" height="10" rx="1" ry="1" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 1px;"/>'
      ),
    },
    route53: {
      body: wrapIcon(
        '<circle cx="40" cy="40" r="20" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><path d="M30,30 Q40,25 50,30 Q50,40 40,45 Q30,40 30,30" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 1px;"/><circle cx="40" cy="35" r="2" style="fill: #fff; stroke: #fff; stroke-miterlimit: 10;"/><path d="M25,25 L35,35 M55,25 L45,35 M55,55 L45,45 M25,55 L35,45" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 1px;"/>'
      ),
    },
    cloudwatch: {
      body: wrapIcon(
        '<rect x="18" y="22" width="44" height="28" rx="2" ry="2" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><rect x="20" y="24" width="40" height="20" rx="1" ry="1" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 1px;"/><path d="M25,30 L30,35 L35,28 L40,38 L45,25 L50,32 L55,30" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 1px;"/><rect x="35" y="50" width="10" height="5" rx="1" ry="1" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 1px;"/><line x1="30" y1="58" x2="50" y2="58" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/>'
      ),
    },
    ecs: {
      body: wrapIcon(
        '<rect x="15" y="20" width="50" height="40" rx="2" ry="2" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><rect x="20" y="25" width="15" height="10" rx="1" ry="1" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 1px;"/><rect x="40" y="25" width="15" height="10" rx="1" ry="1" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 1px;"/><rect x="20" y="40" width="15" height="10" rx="1" ry="1" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 1px;"/><rect x="40" y="40" width="15" height="10" rx="1" ry="1" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 1px;"/>'
      ),
    },
    eks: {
      body: wrapIcon(
        '<circle cx="40" cy="40" r="18" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><circle cx="40" cy="40" r="8" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 1px;"/><circle cx="40" cy="25" r="3" style="fill: #fff; stroke: #fff; stroke-miterlimit: 10;"/><circle cx="25" cy="50" r="3" style="fill: #fff; stroke: #fff; stroke-miterlimit: 10;"/><circle cx="55" cy="50" r="3" style="fill: #fff; stroke: #fff; stroke-miterlimit: 10;"/><line x1="40" y1="28" x2="40" y2="32" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 1px;"/><line x1="28" y1="47" x2="32" y2="43" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 1px;"/><line x1="52" y1="47" x2="48" y2="43" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 1px;"/>'
      ),
    },
    fargate: {
      body: wrapIcon(
        '<rect x="20" y="25" width="40" height="30" rx="2" ry="2" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><path d="M30,35 Q40,30 50,35 Q50,45 40,50 Q30,45 30,35" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 1px;"/><circle cx="40" cy="40" r="3" style="fill: #fff; stroke: #fff; stroke-miterlimit: 10;"/>'
      ),
    },
    stepfunctions: {
      body: wrapIcon(
        '<rect x="20" y="25" width="40" height="30" rx="2" ry="2" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><path d="M30,30 L35,35 L30,40 M40,30 L45,35 L40,40 M50,30 L55,35 L50,40" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 1px;"/><line x1="25" y1="45" x2="55" y2="45" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 1px;"/>'
      ),
    },
    eventbridge: {
      body: wrapIcon(
        '<rect x="20" y="25" width="40" height="30" rx="2" ry="2" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><circle cx="30" cy="35" r="2" style="fill: #fff; stroke: #fff; stroke-miterlimit: 10;"/><circle cx="50" cy="45" r="2" style="fill: #fff; stroke: #fff; stroke-miterlimit: 10;"/><path d="M32,35 Q40,30 48,45" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 1px;"/><path d="M25,40 L35,40 M45,50 L55,50" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 1px;"/>'
      ),
    },
    // Azure Icons
    webapp: {
      body: wrapIcon(
        '<rect x="20" y="25" width="40" height="30" rx="2" ry="2" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><line x1="25" y1="30" x2="55" y2="30" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 1px;"/><circle cx="27" cy="35" r="1" style="fill: #fff; stroke: #fff; stroke-miterlimit: 10;"/><line x1="30" y1="35" x2="50" y2="35" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 1px;"/><circle cx="27" cy="40" r="1" style="fill: #fff; stroke: #fff; stroke-miterlimit: 10;"/><line x1="30" y1="40" x2="45" y2="40" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 1px;"/><circle cx="27" cy="45" r="1" style="fill: #fff; stroke: #fff; stroke-miterlimit: 10;"/><line x1="30" y1="45" x2="55" y2="45" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 1px;"/>'
      ),
    },
    storage: {
      body: wrapIcon(
        '<rect x="18" y="20" width="44" height="40" rx="2" ry="2" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><line x1="18" y1="30" x2="62" y2="30" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><line x1="18" y1="40" x2="62" y2="40" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><line x1="18" y1="50" x2="62" y2="50" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/>'
      ),
    },
    function: {
      body: wrapIcon(
        '<path d="M25,20 Q40,15 55,20 Q55,40 40,45 Q25,40 25,20 Z" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><circle cx="40" cy="30" r="3" style="fill: #fff; stroke: #fff; stroke-miterlimit: 10;"/><path d="M35,35 L45,35 M37,38 L43,38" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 1px;"/>'
      ),
    },
    applicationgateway: {
      body: wrapIcon(
        '<rect x="20" y="25" width="40" height="30" rx="2" ry="2" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><path d="M30,35 L35,30 L35,40 Z M45,30 L50,35 L45,40 Z" style="fill: #fff; stroke: #fff; stroke-miterlimit: 10; stroke-width: 1px;"/><line x1="15" y1="40" x2="20" y2="40" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><line x1="60" y1="40" x2="65" y2="40" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><rect x="35" y="45" width="10" height="5" rx="1" ry="1" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 1px;"/>'
      ),
    },
    cdn: {
      body: wrapIcon(
        '<circle cx="40" cy="40" r="20" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><circle cx="40" cy="40" r="8" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 1px;"/><path d="M25,25 L30,30 M55,25 L50,30 M55,55 L50,50 M25,55 L30,50" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 1px;"/><rect x="35" y="35" width="10" height="10" rx="1" ry="1" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 1px;"/>'
      ),
    },
    cosmosdb: {
      body: wrapIcon(
        '<circle cx="40" cy="40" r="20" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><ellipse cx="40" cy="30" rx="12" ry="4" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 1px;"/><ellipse cx="40" cy="40" rx="12" ry="4" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 1px;"/><ellipse cx="40" cy="50" rx="12" ry="4" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 1px;"/>'
      ),
    },
    rediscache: {
      body: wrapIcon(
        '<rect x="18" y="25" width="44" height="30" rx="15" ry="15" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><circle cx="30" cy="40" r="3" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 1px;"/><circle cx="40" cy="40" r="3" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 1px;"/><circle cx="50" cy="40" r="3" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 1px;"/><path d="M30,30 Q40,25 50,30" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 1px;"/><path d="M25,40 L30,35 L30,45" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 1px;"/>'
      ),
    },
    loadbalancer: {
      body: wrapIcon(
        '<rect x="20" y="25" width="40" height="30" rx="2" ry="2" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><path d="M30,35 L50,35 M35,30 L35,40 M45,30 L45,40" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><circle cx="30" cy="45" r="2" style="fill: #fff; stroke: #fff; stroke-miterlimit: 10;"/><circle cx="40" cy="45" r="2" style="fill: #fff; stroke: #fff; stroke-miterlimit: 10;"/><circle cx="50" cy="45" r="2" style="fill: #fff; stroke: #fff; stroke-miterlimit: 10;"/>'
      ),
    },
    activedirectory: {
      body: wrapIcon(
        '<circle cx="40" cy="30" r="8" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><path d="M30,45 Q40,40 50,45 L50,55 Q40,60 30,55 Z" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><circle cx="37" cy="27" r="1" style="fill: #fff; stroke: #fff; stroke-miterlimit: 10;"/><circle cx="43" cy="27" r="1" style="fill: #fff; stroke: #fff; stroke-miterlimit: 10;"/><path d="M35,32 Q40,35 45,32" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 1px;"/><rect x="35" y="48" width="10" height="5" rx="1" ry="1" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 1px;"/>'
      ),
    },
    eventhubs: {
      body: wrapIcon(
        '<path d="M20,25 Q40,15 60,25 L60,35 Q40,45 20,35 Z" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><path d="M20,45 Q40,35 60,45 L60,55 Q40,65 20,55 Z" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><path d="M25,30 L35,30 M30,35 L40,35 M35,40 L45,40" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 1px;"/><circle cx="50" cy="30" r="2" style="fill: #fff; stroke: #fff; stroke-miterlimit: 10;"/>'
      ),
    },
    servicebus: {
      body: wrapIcon(
        '<rect x="15" y="30" width="50" height="20" rx="2" ry="2" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><line x1="25" y1="30" x2="25" y2="50" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 1px;"/><line x1="35" y1="30" x2="35" y2="50" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 1px;"/><line x1="45" y1="30" x2="45" y2="50" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 1px;"/><line x1="55" y1="30" x2="55" y2="50" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 1px;"/><path d="M15,35 L10,40 L15,45" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 1px;"/><circle cx="60" cy="40" r="2" style="fill: #fff; stroke: #fff; stroke-miterlimit: 10;"/>'
      ),
    },
    virtualnetwork: {
      body: wrapIcon(
        '<rect x="15" y="20" width="50" height="40" rx="3" ry="3" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><rect x="20" y="25" width="20" height="15" rx="1" ry="1" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 1px;"/><rect x="45" y="25" width="15" height="15" rx="1" ry="1" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 1px;"/><rect x="20" y="45" width="35" height="10" rx="1" ry="1" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 1px;"/><circle cx="25" cy="32" r="1" style="fill: #fff; stroke: #fff; stroke-miterlimit: 10;"/>'
      ),
    },
    dns: {
      body: wrapIcon(
        '<circle cx="40" cy="40" r="20" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><path d="M30,30 Q40,25 50,30 Q50,40 40,45 Q30,40 30,30" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 1px;"/><circle cx="40" cy="35" r="2" style="fill: #fff; stroke: #fff; stroke-miterlimit: 10;"/><path d="M25,25 L35,35 M55,25 L45,35 M55,55 L45,45 M25,55 L35,45" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 1px;"/>'
      ),
    },
    monitor: {
      body: wrapIcon(
        '<rect x="18" y="22" width="44" height="28" rx="2" ry="2" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><rect x="20" y="24" width="40" height="20" rx="1" ry="1" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 1px;"/><path d="M25,30 L30,35 L35,28 L40,38 L45,25 L50,32 L55,30" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 1px;"/><rect x="35" y="50" width="10" height="5" rx="1" ry="1" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 1px;"/><line x1="30" y1="58" x2="50" y2="58" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/>'
      ),
    },
    containerinstances: {
      body: wrapIcon(
        '<rect x="20" y="25" width="40" height="30" rx="2" ry="2" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><rect x="25" y="30" width="10" height="8" rx="1" ry="1" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 1px;"/><rect x="40" y="30" width="10" height="8" rx="1" ry="1" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 1px;"/><rect x="25" y="42" width="10" height="8" rx="1" ry="1" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 1px;"/><rect x="40" y="42" width="10" height="8" rx="1" ry="1" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 1px;"/>'
      ),
    },
    kubernetes: {
      body: wrapIcon(
        '<circle cx="40" cy="40" r="18" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><circle cx="40" cy="40" r="8" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 1px;"/><circle cx="40" cy="25" r="3" style="fill: #fff; stroke: #fff; stroke-miterlimit: 10;"/><circle cx="25" cy="50" r="3" style="fill: #fff; stroke: #fff; stroke-miterlimit: 10;"/><circle cx="55" cy="50" r="3" style="fill: #fff; stroke: #fff; stroke-miterlimit: 10;"/><line x1="40" y1="28" x2="40" y2="32" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 1px;"/><line x1="28" y1="47" x2="32" y2="43" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 1px;"/><line x1="52" y1="47" x2="48" y2="43" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 1px;"/>'
      ),
    },
    containerregistry: {
      body: wrapIcon(
        '<rect x="20" y="20" width="40" height="40" rx="2" ry="2" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><rect x="25" y="25" width="10" height="8" rx="1" ry="1" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 1px;"/><rect x="40" y="25" width="10" height="8" rx="1" ry="1" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 1px;"/><rect x="25" y="37" width="10" height="8" rx="1" ry="1" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 1px;"/><rect x="40" y="37" width="10" height="8" rx="1" ry="1" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 1px;"/><rect x="25" y="49" width="25" height="6" rx="1" ry="1" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 1px;"/>'
      ),
    },
    logicapps: {
      body: wrapIcon(
        '<rect x="20" y="25" width="40" height="30" rx="2" ry="2" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><path d="M30,30 L35,35 L30,40 M40,30 L45,35 L40,40 M50,30 L55,35 L50,40" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 1px;"/><line x1="25" y1="45" x2="55" y2="45" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 1px;"/><circle cx="30" cy="47" r="1" style="fill: #fff; stroke: #fff; stroke-miterlimit: 10;"/>'
      ),
    },
    eventgrid: {
      body: wrapIcon(
        '<rect x="20" y="25" width="40" height="30" rx="2" ry="2" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><circle cx="30" cy="35" r="2" style="fill: #fff; stroke: #fff; stroke-miterlimit: 10;"/><circle cx="50" cy="45" r="2" style="fill: #fff; stroke: #fff; stroke-miterlimit: 10;"/><path d="M32,35 Q40,30 48,45" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 1px;"/><path d="M25,40 L35,40 M45,50 L55,50" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 1px;"/><circle cx="40" cy="35" r="1" style="fill: #fff; stroke: #fff; stroke-miterlimit: 10;"/>'
      ),
    },
    devops: {
      body: wrapIcon(
        '<rect x="20" y="25" width="40" height="30" rx="2" ry="2" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><circle cx="30" cy="35" r="3" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 1px;"/><circle cx="50" cy="45" r="3" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 1px;"/><path d="M33,35 L47,45" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 1px;"/><path d="M25,30 L30,25 L35,30" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 1px;"/><path d="M45,50 L50,55 L55,50" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 1px;"/>'
      ),
    },
    // GCP Icons
    compute: {
      body: wrapIcon(
        '<rect x="20" y="25" width="40" height="30" rx="3" ry="3" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><circle cx="30" cy="35" r="3" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 1px;"/><circle cx="50" cy="35" r="3" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 1px;"/><circle cx="30" cy="45" r="3" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 1px;"/><circle cx="50" cy="45" r="3" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 1px;"/>'
      ),
    },
    cloudloadbalancing: {
      body: wrapIcon(
        '<rect x="20" y="25" width="40" height="30" rx="2" ry="2" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><path d="M30,35 L50,35 M35,30 L35,40 M45,30 L45,40" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><circle cx="30" cy="45" r="2" style="fill: #fff; stroke: #fff; stroke-miterlimit: 10;"/><circle cx="40" cy="45" r="2" style="fill: #fff; stroke: #fff; stroke-miterlimit: 10;"/><circle cx="50" cy="45" r="2" style="fill: #fff; stroke: #fff; stroke-miterlimit: 10;"/><path d="M25,30 L35,30" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 1px;"/>'
      ),
    },
    cloudcdn: {
      body: wrapIcon(
        '<circle cx="40" cy="40" r="20" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><circle cx="40" cy="40" r="8" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 1px;"/><path d="M25,25 L30,30 M55,25 L50,30 M55,55 L50,50 M25,55 L30,50" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 1px;"/><path d="M32,32 L48,48 M48,32 L32,48" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 1px;"/>'
      ),
    },
    cloudsql: {
      body: wrapIcon(
        '<ellipse cx="40" cy="30" rx="20" ry="6" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><ellipse cx="40" cy="45" rx="20" ry="6" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><line x1="20" y1="30" x2="20" y2="45" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><line x1="60" y1="30" x2="60" y2="45" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><path d="M30,35 Q40,32 50,35" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 1px;"/>'
      ),
    },
    memorystore: {
      body: wrapIcon(
        '<rect x="18" y="25" width="44" height="30" rx="15" ry="15" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><circle cx="30" cy="40" r="3" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 1px;"/><circle cx="40" cy="40" r="3" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 1px;"/><circle cx="50" cy="40" r="3" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 1px;"/><path d="M30,30 Q40,25 50,30" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 1px;"/><path d="M30,50 Q40,55 50,50" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 1px;"/>'
      ),
    },
    cloudiam: {
      body: wrapIcon(
        '<circle cx="40" cy="30" r="8" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><path d="M30,45 Q40,40 50,45 L50,55 Q40,60 30,55 Z" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><circle cx="37" cy="27" r="1" style="fill: #fff; stroke: #fff; stroke-miterlimit: 10;"/><circle cx="43" cy="27" r="1" style="fill: #fff; stroke: #fff; stroke-miterlimit: 10;"/><path d="M35,32 Q40,35 45,32" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 1px;"/><circle cx="25" cy="25" r="2" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 1px;"/><circle cx="55" cy="25" r="2" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 1px;"/>'
      ),
    },
    pubsub: {
      body: wrapIcon(
        '<path d="M20,25 Q40,15 60,25 L60,35 Q40,45 20,35 Z" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><path d="M20,45 Q40,35 60,45 L60,55 Q40,65 20,55 Z" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><path d="M25,30 L35,30 M30,35 L40,35 M35,40 L45,40" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 1px;"/><circle cx="50" cy="30" r="2" style="fill: #fff; stroke: #fff; stroke-miterlimit: 10;"/><circle cx="55" cy="50" r="2" style="fill: #fff; stroke: #fff; stroke-miterlimit: 10;"/>'
      ),
    },
    cloudstorage: {
      body: wrapIcon(
        '<rect x="15" y="25" width="50" height="30" rx="3" ry="3" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><line x1="15" y1="35" x2="65" y2="35" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><line x1="15" y1="45" x2="65" y2="45" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><circle cx="22" cy="30" r="1.5" style="fill: #fff; stroke: #fff; stroke-miterlimit: 10;"/><circle cx="22" cy="40" r="1.5" style="fill: #fff; stroke: #fff; stroke-miterlimit: 10;"/><circle cx="22" cy="50" r="1.5" style="fill: #fff; stroke: #fff; stroke-miterlimit: 10;"/><path d="M55,30 Q58,32 55,34" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 1px;"/>'
      ),
    },
    cloudvpc: {
      body: wrapIcon(
        '<rect x="15" y="20" width="50" height="40" rx="3" ry="3" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><rect x="20" y="25" width="20" height="15" rx="1" ry="1" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 1px;"/><rect x="45" y="25" width="15" height="15" rx="1" ry="1" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 1px;"/><rect x="20" y="45" width="35" height="10" rx="1" ry="1" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 1px;"/><path d="M25,32 Q30,27 35,32" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 1px;"/>'
      ),
    },
    clouddns: {
      body: wrapIcon(
        '<circle cx="40" cy="40" r="20" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><path d="M30,30 Q40,25 50,30 Q50,40 40,45 Q30,40 30,30" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 1px;"/><circle cx="40" cy="35" r="2" style="fill: #fff; stroke: #fff; stroke-miterlimit: 10;"/><path d="M25,25 L35,35 M55,25 L45,35 M55,55 L45,45 M25,55 L35,45" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 1px;"/><path d="M30,50 Q40,47 50,50" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 1px;"/>'
      ),
    },
    cloudmonitoring: {
      body: wrapIcon(
        '<rect x="18" y="22" width="44" height="28" rx="2" ry="2" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><rect x="20" y="24" width="40" height="20" rx="1" ry="1" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 1px;"/><path d="M25,30 L30,35 L35,28 L40,38 L45,25 L50,32 L55,30" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 1px;"/><rect x="35" y="50" width="10" height="5" rx="1" ry="1" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 1px;"/><line x1="30" y1="58" x2="50" y2="58" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><circle cx="25" cy="20" r="2" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 1px;"/>'
      ),
    },
    cloudrun: {
      body: wrapIcon(
        '<rect x="20" y="25" width="40" height="30" rx="2" ry="2" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><path d="M30,35 Q40,30 50,35 Q50,45 40,50 Q30,45 30,35" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 1px;"/><circle cx="40" cy="40" r="3" style="fill: #fff; stroke: #fff; stroke-miterlimit: 10;"/><path d="M25,30 L30,25 L35,30" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 1px;"/>'
      ),
    },
    gke: {
      body: wrapIcon(
        '<circle cx="40" cy="40" r="18" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><circle cx="40" cy="40" r="8" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 1px;"/><circle cx="40" cy="25" r="3" style="fill: #fff; stroke: #fff; stroke-miterlimit: 10;"/><circle cx="25" cy="50" r="3" style="fill: #fff; stroke: #fff; stroke-miterlimit: 10;"/><circle cx="55" cy="50" r="3" style="fill: #fff; stroke: #fff; stroke-miterlimit: 10;"/><line x1="40" y1="28" x2="40" y2="32" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 1px;"/><line x1="28" y1="47" x2="32" y2="43" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 1px;"/><line x1="52" y1="47" x2="48" y2="43" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 1px;"/><path d="M35,35 Q40,32 45,35" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 1px;"/>'
      ),
    },
    gcr: {
      body: wrapIcon(
        '<rect x="20" y="20" width="40" height="40" rx="2" ry="2" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><rect x="25" y="25" width="10" height="8" rx="1" ry="1" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 1px;"/><rect x="40" y="25" width="10" height="8" rx="1" ry="1" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 1px;"/><rect x="25" y="37" width="10" height="8" rx="1" ry="1" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 1px;"/><rect x="40" y="37" width="10" height="8" rx="1" ry="1" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 1px;"/><rect x="25" y="49" width="25" height="6" rx="1" ry="1" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 1px;"/><circle cx="55" cy="25" r="2" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 1px;"/>'
      ),
    },
    cloudfunctions: {
      body: wrapIcon(
        '<path d="M25,20 Q40,15 55,20 Q55,40 40,45 Q25,40 25,20 Z" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><circle cx="40" cy="30" r="3" style="fill: #fff; stroke: #fff; stroke-miterlimit: 10;"/><path d="M35,35 L45,35 M37,38 L43,38" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 1px;"/><path d="M30,25 Q40,22 50,25" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 1px;"/>'
      ),
    },
    workflows: {
      body: wrapIcon(
        '<rect x="20" y="25" width="40" height="30" rx="2" ry="2" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><path d="M30,30 L35,35 L30,40 M40,30 L45,35 L40,40 M50,30 L55,35 L50,40" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 1px;"/><line x1="25" y1="45" x2="55" y2="45" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 1px;"/><circle cx="25" cy="30" r="1" style="fill: #fff; stroke: #fff; stroke-miterlimit: 10;"/>'
      ),
    },
    eventarc: {
      body: wrapIcon(
        '<rect x="20" y="25" width="40" height="30" rx="2" ry="2" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><circle cx="30" cy="35" r="2" style="fill: #fff; stroke: #fff; stroke-miterlimit: 10;"/><circle cx="50" cy="45" r="2" style="fill: #fff; stroke: #fff; stroke-miterlimit: 10;"/><path d="M32,35 Q40,30 48,45" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 1px;"/><path d="M25,40 L35,40 M45,50 L55,50" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 1px;"/><circle cx="40" cy="35" r="1" style="fill: #fff; stroke: #fff; stroke-miterlimit: 10;"/><path d="M30,50 Q40,47 50,50" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 1px;"/>'
      ),
    },
    cloudbuild: {
      body: wrapIcon(
        '<rect x="20" y="25" width="40" height="30" rx="2" ry="2" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><circle cx="30" cy="35" r="3" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 1px;"/><circle cx="50" cy="45" r="3" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 1px;"/><path d="M33,35 L47,45" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 1px;"/><path d="M25,30 L30,25 L35,30" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 1px;"/><path d="M45,50 L50,55 L55,50" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 1px;"/><rect x="25" y="32" width="10" height="3" rx="1" ry="1" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 1px;"/>'
      ),
    },
    // General IT Icons
    api: {
      body: wrapIcon(
        '<rect x="20" y="25" width="40" height="30" rx="2" ry="2" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><path d="M25,35 L35,30 L35,40 Z M45,30 L55,35 L45,40 Z" style="fill: #fff; stroke: #fff; stroke-miterlimit: 10; stroke-width: 1px;"/>'
      ),
    },
    microservice: {
      body: wrapIcon(
        '<circle cx="40" cy="40" r="18" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><circle cx="40" cy="40" r="8" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 1px;"/><line x1="32" y1="32" x2="28" y2="28" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 1px;"/><line x1="48" y1="32" x2="52" y2="28" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 1px;"/><line x1="48" y1="48" x2="52" y2="52" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 1px;"/><line x1="32" y1="48" x2="28" y2="52" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 1px;"/>'
      ),
    },
    queue: {
      body: wrapIcon(
        '<rect x="15" y="30" width="50" height="20" rx="2" ry="2" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><line x1="25" y1="30" x2="25" y2="50" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 1px;"/><line x1="35" y1="30" x2="35" y2="50" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 1px;"/><line x1="45" y1="30" x2="45" y2="50" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 1px;"/><line x1="55" y1="30" x2="55" y2="50" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 1px;"/>'
      ),
    },
    cache: {
      body: wrapIcon(
        '<rect x="18" y="25" width="44" height="30" rx="15" ry="15" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><circle cx="35" cy="40" r="4" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 1px;"/><circle cx="45" cy="40" r="4" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 1px;"/>'
      ),
    },
    loadbalancer: {
      body: wrapIcon(
        '<rect x="20" y="25" width="40" height="30" rx="2" ry="2" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><path d="M30,35 L50,35 M35,30 L35,40 M45,30 L45,40" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><circle cx="30" cy="45" r="2" style="fill: #fff; stroke: #fff; stroke-miterlimit: 10;"/><circle cx="40" cy="45" r="2" style="fill: #fff; stroke: #fff; stroke-miterlimit: 10;"/><circle cx="50" cy="45" r="2" style="fill: #fff; stroke: #fff; stroke-miterlimit: 10;"/>'
      ),
    },
    monitor: {
      body: wrapIcon(
        '<rect x="18" y="22" width="44" height="28" rx="2" ry="2" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/><rect x="20" y="24" width="40" height="20" rx="1" ry="1" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 1px;"/><path d="M25,30 L30,35 L35,28 L40,38 L45,25 L50,32 L55,30" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 1px;"/><rect x="35" y="50" width="10" height="5" rx="1" ry="1" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 1px;"/><line x1="30" y1="58" x2="50" y2="58" style="fill: none; stroke: #fff; stroke-miterlimit: 10; stroke-width: 2px;"/>'
      ),
    },
  },
};
