#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { CdkWorkshopHitCounterStack } from '../lib/stack';

const app = new cdk.App();
new CdkWorkshopHitCounterStack(app, 'cdkWorkshopHitCounterStack');
