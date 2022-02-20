<% if $Options %>
<datalist id="{$ID.XML}">
    <% loop $Options %>
    <option value="{$Value.XML}"<% if $Label %> label="{$Label.XML}"<% end_if %>>
    <% end_loop %>
</datalist>
<% end_if %>