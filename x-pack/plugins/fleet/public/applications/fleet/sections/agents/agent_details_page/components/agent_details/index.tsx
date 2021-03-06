/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License;
 * you may not use this file except in compliance with the Elastic License.
 */
import React, { memo } from 'react';
import { EuiFlexGroup, EuiFlexItem, EuiTitle, EuiSpacer } from '@elastic/eui';
import { FormattedMessage } from '@kbn/i18n/react';
import { Agent, AgentPolicy } from '../../../../../types';
import { AgentDetailsOverviewSection } from './agent_details_overview';
import { AgentDetailsIntegrationsSection } from './agent_details_integrations';

export const AgentDetailsContent: React.FunctionComponent<{
  agent: Agent;
  agentPolicy?: AgentPolicy;
}> = memo(({ agent, agentPolicy }) => {
  return (
    <>
      <EuiFlexGroup alignItems="flexStart">
        <EuiFlexItem>
          <EuiTitle size="s">
            <h3>
              <FormattedMessage
                id="xpack.fleet.agentDetails.overviewSectionTitle"
                defaultMessage="Overview"
              />
            </h3>
          </EuiTitle>
          <EuiSpacer size="s" />
          <AgentDetailsOverviewSection agent={agent} agentPolicy={agentPolicy} />
        </EuiFlexItem>
        <EuiFlexItem>
          <EuiTitle size="s">
            <h3>
              <FormattedMessage
                id="xpack.fleet.agentDetails.integrationsSectionTitle"
                defaultMessage="Integrations"
              />
            </h3>
          </EuiTitle>
          <EuiSpacer size="s" />
          <AgentDetailsIntegrationsSection agent={agent} agentPolicy={agentPolicy} />
        </EuiFlexItem>
      </EuiFlexGroup>
    </>
  );
});
